import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Users, CreditCard } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface BookingCalendarProps {
  apartmentId: string;
  price: number;
  maxGuests: number;
}

const BookingCalendar: React.FC<BookingCalendarProps> = ({ apartmentId, price, maxGuests }) => {
  const { t } = useLanguage();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  const [guests, setGuests] = useState(1);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Generate calendar days for current month
  const calendarDays = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    // First day of the month
    const firstDay = new Date(year, month, 1);
    // Last day of the month
    const lastDay = new Date(year, month + 1, 0);
    
    // Start from the Sunday of the week containing the first day
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - startDate.getDay());
    
    // End at the Saturday of the week containing the last day
    const endDate = new Date(lastDay);
    endDate.setDate(endDate.getDate() + (6 - endDate.getDay()));
    
    const days = [];
    const current = new Date(startDate);
    
    while (current <= endDate) {
      days.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
    
    return days;
  }, [currentDate]);

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(newDate.getMonth() - 1);
      } else {
        newDate.setMonth(newDate.getMonth() + 1);
      }
      return newDate;
    });
  };

  const handleDateClick = (date: Date) => {
    // Don't allow selecting past dates
    if (date < today) return;

    if (!checkInDate || (checkInDate && checkOutDate)) {
      // First selection or reset selection
      setCheckInDate(date);
      setCheckOutDate(null);
    } else if (date > checkInDate) {
      // Second selection - check out date
      setCheckOutDate(date);
    } else {
      // If selected date is before check-in, make it the new check-in
      setCheckInDate(date);
      setCheckOutDate(null);
    }
  };

  const isDateInRange = (date: Date) => {
    if (!checkInDate || !checkOutDate) return false;
    return date >= checkInDate && date <= checkOutDate;
  };

  const isDateSelected = (date: Date) => {
    if (!checkInDate) return false;
    if (checkInDate && date.getTime() === checkInDate.getTime()) return true;
    if (checkOutDate && date.getTime() === checkOutDate.getTime()) return true;
    return false;
  };

  const calculateNights = () => {
    if (!checkInDate || !checkOutDate) return 0;
    const diffTime = Math.abs(checkOutDate.getTime() - checkInDate.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const total = calculateNights() * price;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkInDate || !checkOutDate) {
      alert('Please select check-in and check-out dates');
      return;
    }
    alert(`Booking request for ${apartmentId} from ${checkInDate.toLocaleDateString()} to ${checkOutDate.toLocaleDateString()} for ${guests} guests`);
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-2xl font-bold text-gray-800">€{price}</span>
          <span className="text-gray-600">{t('booking.pernight')}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Calendar Header */}
        <div className="flex items-center justify-between mb-4">
          <button
            type="button"
            onClick={() => navigateMonth('prev')}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
          <h3 className="text-lg font-semibold text-gray-800">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h3>
          <button
            type="button"
            onClick={() => navigateMonth('next')}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {/* Calendar Grid */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          {/* Day headers */}
          <div className="grid grid-cols-7 bg-gray-50">
            {dayNames.map(day => (
              <div key={day} className="p-2 text-center text-sm font-medium text-gray-600 border-r border-gray-200 last:border-r-0">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar days */}
          <div className="grid grid-cols-7">
            {calendarDays.map((date, index) => {
              const isCurrentMonth = date.getMonth() === currentDate.getMonth();
              const isPast = date < today;
              const isSelected = isDateSelected(date);
              const isInRange = isDateInRange(date);
              const isToday = date.getTime() === today.getTime();

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleDateClick(date)}
                  disabled={isPast}
                  className={`
                    relative p-3 text-sm border-r border-b border-gray-200 last:border-r-0 
                    transition-all duration-200 hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-inset
                    ${!isCurrentMonth ? 'text-gray-300 bg-gray-50' : 'text-gray-700'}
                    ${isPast ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
                    ${isSelected ? 'bg-teal-600 text-white hover:bg-teal-700' : ''}
                    ${isInRange && !isSelected ? 'bg-teal-100 text-teal-800' : ''}
                    ${isToday && !isSelected ? 'bg-blue-100 text-blue-800 font-semibold' : ''}
                  `}
                >
                  <span className="relative z-10">{date.getDate()}</span>
                  {isToday && !isSelected && (
                    <div className="absolute inset-0 border-2 border-blue-500 rounded pointer-events-none"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected dates display */}
        {(checkInDate || checkOutDate) && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600 block">{t('booking.checkin')}</span>
                <span className="font-semibold text-gray-800">
                  {checkInDate ? checkInDate.toLocaleDateString() : '—'}
                </span>
              </div>
              <div>
                <span className="text-gray-600 block">{t('booking.checkout')}</span>
                <span className="font-semibold text-gray-800">
                  {checkOutDate ? checkOutDate.toLocaleDateString() : '—'}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Guests selector */}
        <div>
          <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
            {t('booking.guests')}
          </label>
          <div className="relative">
            <Users className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <select
              id="guests"
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value))}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            >
              {Array.from({ length: maxGuests }, (_, i) => i + 1).map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? t('booking.guest') : t('booking.guests')}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Price breakdown */}
        {total > 0 && (
          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">€{price} × {calculateNights()} {t('booking.nights')}</span>
              <span className="text-gray-800">€{total}</span>
            </div>
            <div className="flex justify-between items-center font-bold text-lg">
              <span>{t('booking.total')}</span>
              <span>€{total}</span>
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={!checkInDate || !checkOutDate}
          className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          <CreditCard className="h-5 w-5" />
          <span>{t('booking.reserve')}</span>
        </button>
      </form>

      <p className="text-xs text-gray-500 mt-4 text-center">
        {t('booking.notice')}
      </p>
    </div>
  );
};

export default BookingCalendar;