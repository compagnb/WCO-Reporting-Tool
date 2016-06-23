# Universal WCO Reporting Tool
## Deriving metrics from WCO Usage Report Exports

### * Metrics included:
    * Major Code
    * Faculty/Staff/Student
    * Equipment (for purchasing, and loaner gear)
    * Day/Time of Checkout (for scheduling)
    * Day/Time of Checkin (for scheduling)

### * Optional Metrics Included:
    * Status of reservation (reservations never picked up)
    *  Late return (by hour amount)
    * Frequent students
    
    

To use this tool:

select Usage Report from under the Reports tab in WCO

Choose your check-out center
select all states ( Checkout, completed.... etc)
select start date and time
select end date and time

ensure the following result collumns are included in your output:
    "Patron Department"
    "Effective Patron Class"
    "Item Names"
    Summary
    "Pickup Time"
    "Actual Return Time"
    "Effective Return Time"
    "Return Time"
    State 
    Patron

export results as a CSV