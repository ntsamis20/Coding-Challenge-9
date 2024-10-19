//Task 1 Create Book class with Properties and Methods
class Book {
    constructor(title, author, ISBN, isAvailable = true) {
      this.title = title;
      this.author = author;
      this.ISBN = ISBN;
      this._isAvailable = isAvailable;
    }
  
    getDetails() {
      return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.ISBN}`;
    }
  
    get isAvailable() {
      return this._isAvailable;
    }
  
    set isAvailable(status) {
      this._isAvailable = status;
    }
  }
  
  console.log(book1.getDetails());      
  console.log(book1.isAvailable);         
  
  book1.isAvailable = false;
  console.log(book1.isAvailable);   

//Task 2 Create Section class to manage books and availability
class Section {
    constructor(name) {
      this.name = name;
      this.books = []; 
    }
  
    addBook(book) {
      if (book instanceof Book) {
        this.books.push(book);
      } else {
        console.log("Only instances of Book can be added.");
      }
    }
  
    getAvailableBooks() {
      return this.books.filter(book => book.isAvailable).length;
    }
  
    listBooks() {
      return this.books.map(book => {
        const availability = book.isAvailable ? "Available" : "Borrowed";
        return `${book.title} - ${availability}`;
      }).join("\n");
    }
  }

const fiction = new Section("Fiction");
const science = new Section("Science");

const book1 = new Book("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", "1234567890");
const book2 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "0987654321");
const book3 = new Book("The Double Helix", "James D. Watson", "1122334455");

       
fiction.addBook(book1);
fiction.addBook(book2);
science.addBook(book3);

console.log(fictionSection.getAvailableBooks()); 
console.log(fictionSection.listBooks());

//Task 3 Create Patron class to borrow and return books
class Patron {
    constructor(name) {
      this.name = name;
      this.borrowedBooks = [];
    }
  
    borrowBook(book) {
      if (book instanceof Book) {
        if (book.isAvailable) {
          book.isAvailable = false;  
          this.borrowedBooks.push(book);  
          console.log(`${this.name} successfully rented "${book.title}".`);
        } else {
          console.log(`Sorry, "${book.title}" is currently unavailable.`);
        }
      } else {
        console.log("You can only rent instances of Book.");
      }
    }
  
    returnBook(book) {
      if (this.borrowedBooks.includes(book)) {
        book.isAvailable = true;  
        this.borrowedBooks = this.borrowedBooks.filter(b => b !== book); 
        console.log(`${this.name} successfully returned rental "${book.title}".`);
      } else {
        console.log(`${this.name} has not rented "${book.title}".`);
      }
    }
  }

  // Task 4 Create VIPPatron class with inheritance from Patron
  class VIPPatron extends Patron {
    constructor(name) {
      super(name); 
      this.priority = true; 
    }
  
    borrowBook(book, competingPatron = null) {
      if (book instanceof Book) {
        if (book.isAvailable) {
          book.isAvailable = false;  
          this.borrowedBooks.push(book); 
          console.log(`${this.name} successfully rented "${book.title}".`);
        } 
        else if (competingPatron && competingPatron instanceof Patron && !this.priority) {
          console.log(`"${book.title}" is currently unavailable and ${competingPatron.name} has rented it.`);
        }
        else if (competingPatron && this.priority) {
          console.log(`${this.name} (VIP) has rental priority. ${competingPatron.name} cannot rent "${book.title}".`);
        } 
        else {
          console.log(`Sorry, "${book.title}" is currently unavailable.`);
        }
      } else {
        console.log("You can only rent instances of Book.");
      }
    }
  }

  //Task 5 Calculate total available books in the section
  class Section {
    constructor(name) {
      this.name = name;
      this.books = []; 
    }
  
    addBook(book) {
      if (book instanceof Book) {
        this.books.push(book);
      } else {
        console.log("Only instances of Book can be added.");
      }
    }
  
    getAvailableBooks() {
      return this.books.filter(book => book.isAvailable).length;
    }
  
    listBooks() {
      return this.books.map(book => {
        const availability = book.isAvailable ? "Available" : "Rented";
        return `${book.title} - ${availability}`;
      }).join("\n");
    }
  
    calculateTotalBooksAvailable() {
      return this.getAvailableBooks();
    }
  }

//Task 6 Create and manage library sections and patrons

const regularPatron = new Patron("Michael Jordan");
const vipPatron = new VIPPatron("Kevin Durant", true);

regularPatron.borrowBook(book1);

vipPatron.borrowBook(book1);

regularPatron.returnBook(book1);

fiction.listBooks();

patron1.borrowBook(book1);  
patron2.borrowBook(book4);  
vipPatron.borrowBook(book2); 


vipPatron.borrowBook(book3);  


patron1.returnBook(book1);  


console.log("Total available books in Fiction section:", fictionSection.calculateTotalBooksAvailable());
console.log("Total available books in Science section:", scienceSection.calculateTotalBooksAvailable());

console.log("\nBooks in Fiction section:");
console.log(fictionSection.listBooks());

console.log("\nBooks in Science section:");
console.log(scienceSection.listBooks());

console.log(`Total available books in Fiction: ${fiction.getAvailableBooks()}`);
console.log(`Total available books in Science: ${science.getAvailableBooks()}`);

