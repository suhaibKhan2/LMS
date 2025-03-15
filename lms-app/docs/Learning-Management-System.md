# **Data Flow Diagram (DFD) for Learning Management System (LMS)**

## **1. Level 0 DFD (Context Diagram)**

At this level, we represent the entire system as a **single process**, showing the flow of data between the system and external entities.

### **Diagram Representation:**
```
+------------------+       +-----------------------------+       +------------------+
|      User       | ----> |  Learning Management System | ----> |   Database      |
+------------------+       +-----------------------------+       +------------------+
```

### **Explanation:**
- **User** interacts with the **Learning Management System (LMS)** by enrolling in courses, accessing materials, and submitting assignments.
- The system processes user actions and retrieves/stores data in the **Database**.

---

## **2. Level 1 DFD (Decomposition of LMS)**

This level breaks down the **Learning Management System** into key processes:

1. **User Authentication & Profile Management**
2. **Course Management**
3. **Assignment & Quiz Management**
4. **Progress Tracking & Reports**

### **Diagram Representation:**
```
+------------------+       +------------------------------+       +------------------+
|      User       | ----> | 1.0 User Authentication      | ----> |   User Database  |
+------------------+       +------------------------------+       +------------------+
                                      |
                                      v
+------------------+       +------------------------+        +----------------+
|     Instructor  | ----> | 2.0 Course Management | ----> | Course Database |
+------------------+       +------------------------+        +----------------+
                                      |
                                      v
+------------------+       +----------------------------+        +----------------+
|      Student    | ----> | 3.0 Assignment Management | ----> | Assignment DB  |
+------------------+       +----------------------------+        +----------------+
                                      |
                                      v
+------------------+       +-----------------------+        +----------------+
|      Admin      | ----> | 4.0 Progress Tracking | ----> | Reports Database|
+------------------+       +-----------------------+        +----------------+
```

### **Explanation:**

1. **User Authentication (Process 1.0):**
   - Users register, log in, and manage their profiles.
   - User credentials are validated against the **User Database**.

2. **Course Management (Process 2.0):**
   - Instructors create, update, or remove courses.
   - Course data is stored in the **Course Database**.

3. **Assignment Management (Process 3.0):**
   - Students submit assignments and take quizzes.
   - Assignment data is stored in the **Assignment Database**.

4. **Progress Tracking (Process 4.0):**
   - Admins and instructors track student progress and generate reports.
   - Data is stored in the **Reports Database**.

---

## **3. Level 2 DFD (Detailed Breakdown)**

This level provides a more detailed breakdown of **User Authentication & Assignment Management**.

### **User Authentication (Process 1.0)**
```
+------------------+       +----------------------------+       +------------------+
|      User       | ----> | 1.1 Enter Credentials      | ----> |   User Database  |
+------------------+       +----------------------------+       +------------------+
                                      |
                                      v
                             +-------------------------+
                             | 1.2 Validate Credentials |
                             +-------------------------+
                                      |
                   +------------------------+-------------------+
                   |                                                 |
                   v                                                 v
       +-----------------+                        +--------------------+
       | 1.3 Login Success |                        | 1.4 Login Failed |
       +-----------------+                        +--------------------+
```

### **Assignment Management (Process 3.0)**
```
+------------------+       +----------------------+       +----------------+
|      Student    | ----> | 3.1 View Assignment  | ----> | Assignment DB  |
+------------------+       +----------------------+       +----------------+
                                      |
                                      v
                             +----------------------+
                             | 3.2 Submit Assignment |
                             +----------------------+
                                      |
                                      v
                             +----------------------+
                             | 3.3 Instructor Review |
                             +----------------------+
                                      |
                                      v
                             +----------------------+
                             | 3.4 Grade Assignment |
                             +----------------------+
```

### **Explanation:**

1. **User Authentication:**
   - Users enter their credentials, which are validated.
   - If valid, login is successful; otherwise, an error message appears.

2. **Assignment Management:**
   - Students view available assignments and submit completed work.
   - Instructors review submissions and assign grades.

---

## **Conclusion**

- This **DFD** outlines the **Learning Management System’s** data flow from user authentication to course management, assignment handling, and progress tracking.
- This document should be included in the project repository under `docs/DFD.md` for reference.




