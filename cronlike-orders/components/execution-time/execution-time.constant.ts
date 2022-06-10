/*
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Copyright 2022 GIP SmartMercial GmbH, Germany
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 */


export enum ExecutionTimeInterval {
    MILLISECONDS = 'Every millisecond',
    SECONDS = 'Every second',
    MINUTES = 'Every minute',
    HOURS = 'Hourly',
    DAYS = 'Daily',
    WEEK = 'Weekly',
    MONTH = 'Monthly',
    YEAR = 'Yearly'
}


export enum ExecutionTimeMonthlyBy {
    DAY_OF_MONTH = 'Day of Month',
    WEEKDAY = 'Weekday'
}

export enum ExecutionTimeMonthlyAtWhichDayOfTheMonth {
    FIRST = 'First day of the month',
    LAST = 'Last day of the month',
    OTHER = 'Other'
}

export enum ExecutionTimeMonth {
    JANUARY = 'Jan',
    FEBRUARY = 'Feb',
    MARCH = 'Mar',
    APRIL = 'Apr',
    MAY = 'May',
    JUNE = 'Jun',
    JULY = 'Jul',
    AUGUST = 'Aug',
    SEPTEMBER = 'Sep',
    OCTOBER = 'Oct',
    NOVEMBER = 'Nov',
    DECEMBER = 'Dec'
}

export enum ExecutionTimeWeekdayPositionInMonth {
    FIRST = 'First',
    SECOND = 'Second',
    THIRD = 'Third',
    FOURTH = 'Fourth',
    LAST = 'Last'
}

export enum ExecutionTimeWeekday {
    MONDAY = 'Mon',
    TUESDAY = 'Tue',
    WEDNESDAY = 'Wed',
    THURSDAY = 'Thu',
    FRIDAY = 'Fri',
    SATURDAY = 'Sat',
    SUNDAY = 'Sun'
}

export enum ExecutionTimeYearlyBy {
    DATE = 'Date',
    WEEKDAY = 'Weekday'
}

export enum ExecutionTimeBehaviorOnError {
    IGNORE = 'Ignore',
    DISABLE = 'Disable',
    DROP = 'Drop'
}

export enum ExecutionTypes {
    ALWAYS = 'Always',
    TIME_WINDOW = 'Time Window'
}

export enum WindowLengths {
    '15MIN' = '15 Minutes',
    '30MIN' = '30 Minutes',
    '1H'    = '1 Hour',
    '1.5H'  = '1 Hour 30 Minutes',
    '2H'    = '2 Hours',
    '3H'    = '3 Hours',
    '4H'    = '4 Hours',
    '6H'    = '6 Hours',
    'OTHER' = 'Other'
}
