# Student Tracker App Architecture

## Main Screens

1. **Login/Signup Screen**
   - User authentication (students)
   - Option to create account or log in

2. **Home/Map Screen**
   - Displays student’s current location on a map
   - Shows route to home
   - Button to start/stop tracking

3. **Alert Screen**
   - Triggered if student deviates from route
   - Shows alert message and options

4. **Explanation/Danger Screen**
   - Student can explain deviation (e.g., stopped for food)
   - Option to signal danger (immediate alert to parents)

## Navigation Flow

- On app launch: Show Login/Signup
- After login: Navigate to Home/Map
- If off-course detected: Show Alert
- From Alert: Student can explain or signal danger

## Integration Points

- Background GPS tracking (native Java module)
- Communication with backend for location updates and alerts
- Push notifications for parent alerts

---

This file outlines the core screens and navigation for the student tracking app. Next, implementation of authentication screens will begin.