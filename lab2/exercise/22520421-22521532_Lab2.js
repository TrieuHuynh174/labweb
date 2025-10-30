class Book {
    constructor(title, author, isbn, availableCopies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.availableCopies = availableCopies;
    }

    borrowBook() {
        if (this.availableCopies > 0) {
            this.availableCopies--;
        } else {
            throw new Error(`No copies of "${this.title}" available to borrow.`);
        }
    }

    returnBook() {
        this.availableCopies++;
    }
}

class User {
    constructor(name, userType) {
        if (this.constructor === User) {
            throw new Error("Cannot instantiate an abstract class.");
        }
        this.name = name;
        this.userType = userType;
        this.borrowedBooks = [];
    }

    borrow(book) {
        throw new Error("Method 'borrow()' must be implemented.");
    }

    return(book) {
        throw new Error("Method 'return()' must be implemented.");
    }
}

class Student extends User {
    constructor(name) {
        super(name, "Student");
    }

    borrow(book) {
        if (this.borrowedBooks.length < 3) {
            if (book.availableCopies > 0) {
                book.borrowBook();
                this.borrowedBooks.push(book);
            } else {
                throw new Error(`No available copies of "${book.title}" to borrow.`);
            }
        } else {
            throw new Error("Students can only borrow up to 3 books.");
        }
    }

    return(book) {
        const index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            book.returnBook();
            this.borrowedBooks.splice(index, 1);
        } else {
            throw new Error(`"${book.title}" was not borrowed by ${this.name}.`);
        }
    }
}

// Teacher Class 
class Teacher extends User {
    constructor(name) {
        super(name, "Teacher");
    }

    borrow(book) {
        if (this.borrowedBooks.length < 5) {
            if (book.availableCopies > 0) {
                book.borrowBook();
                this.borrowedBooks.push(book);
            } else {
                throw new Error(`No available copies of "${book.title}" to borrow.`);
            }
        } else {
            throw new Error("Teachers can only borrow up to 5 books.");
        }
    }

    return(book) {
        const index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            book.returnBook();
            this.borrowedBooks.splice(index, 1);
        } else {
            throw new Error(`"${book.title}" was not borrowed by ${this.name}.`);
        }
    }
}

// Library Class
class Library {
    constructor() {
        this.books = [];
        this.users = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    addUser(user) {
        this.users.push(user);
    }

    borrowBook(user, book) {
        if (this.books.includes(book)) {
            user.borrow(book);
        } else {
            throw new Error(`The book "${book.title}" is not available in the library.`);
        }
    }

    returnBook(user, book) {
        if (this.books.includes(book)) {
            user.return(book);
        } else {
            throw new Error(`The book "${book.title}" does not belong to this library.`);
        }
    }

    listAvailableBooks() {
        return this.books.filter(book => book.availableCopies > 0);
    }
}

// Usage Example
const library = new Library();

// Add Books
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565", 3);
const book2 = new Book("1984", "George Orwell", "9780451524935", 2);
const book3 = new Book("Moby Dick", "Herman Melville", "9781503280786", 1);
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

// Add Users
const student1 = new Student("Alice");
const teacher1 = new Teacher("Mr. Smith");
library.addUser(student1);
library.addUser(teacher1);

// Borrowing and Returning Books
try {
    library.borrowBook(student1, book1); 
    library.borrowBook(teacher1, book2); 
    library.borrowBook(student1, book3); 

    // Trying to exceed borrowing limit
    library.borrowBook(student1, book2); 

    // Return a book
    library.returnBook(student1, book1); 
    library.returnBook(teacher1, book2); 

    // List available books
    console.log("Available Books:", library.listAvailableBooks().map(book => book.title));
} catch (error) {
    console.error(error.message);
}
