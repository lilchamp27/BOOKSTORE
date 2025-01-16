import logo from './bookstoreLogo.jpg'
import search_icon from './serach_icon.jpg'
import profile_icon from './profile_icon.png'
import cart_icon from './cart_icon.png'
import menu_icon from './menu_icon.png'
import dropdown_icon from './dropdown_icon.png'
import books_collection from './books_collection.jpg'
import great_gatsby from './great_gatsby.jpg'
import mockingbird from './mockingbird.jpg'
import atomic_habits from './atomic_habits.png'
import alchemist from './alchemist.jpg'
import educated from './educated.jpg'
import dune from './dune.jpg'
import laws from './laws.jpg'
import harry from './harry.jpg'
import sapiens from './sapiens.png'
import pride from './pride.jpg'
import exchange_icon from './exchange.png'
import customer_icon from './customer.png'
import quality_icon from './quality.png'
import cross_icon from './cross_icon.png'

export const assets = {
    logo,
    search_icon,
    profile_icon,
    cart_icon,
    menu_icon,
    dropdown_icon,
    books_collection,
    exchange_icon,
    customer_icon,
    quality_icon,
    cross_icon
}

export const products = [
    {
      "id": 1,
      "title": "The Great Gatsby",
      "image": [great_gatsby],
      "author": "F. Scott Fitzgerald",
      "price": 10.99,
      "posted_date": "2023-03-15",
      "category": "Fiction",
      "description": "A classic novel of the Jazz Age, The Great Gatsby explores themes of decadence, idealism, and social change.",
      "bestSeller": "true",
      "ratings": 4.7
    },
    {
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "image": [mockingbird],
      "price": 8.99,
      "posted_date": "2023-05-22",
      "category": "Fiction",
      "bestSeller": "true",
      "description": "A Pulitzer Prize-winning novel that examines racial injustice and moral growth in the American South.",
      "ratings": 4.9
    },
    {
      "title": "Atomic Habits",
      "image": [atomic_habits],
      "author": "James Clear",
      "price": 15.99,
      "posted_date": "2023-07-01",
      "category": "Self-Help",
      "description": "An insightful guide to building good habits and breaking bad ones with practical strategies.",
      "bestSeller": "true",
      "ratings": 4.8
    },
    {
      "title": "The Alchemist",
      "bestSeller": "true",
      "author": "Paulo Coelho",
      "image": [alchemist],
      "price": 12.49,
      "posted_date": "2023-09-10",
      "category": "Philosophy",
      "description": "A philosophical tale about following your dreams and discovering your personal legend.",
      "ratings": 4.6
    },
    {
      "title": "Educated",
      "image": [educated],
      "bestSeller": "true",
      "author": "Tara Westover",
      "price": 13.99,
      "posted_date": "2023-11-05",
      "category": "Memoir",
      "description": "A memoir about growing up in a strict and abusive household and pursuing an education against all odds.",
      "ratings": 4.8
    },
    {
      "title": "Dune",
      "image": [dune],
      "bestSeller": "true",
      "author": "Frank Herbert",
      "price": 14.99,
      "posted_date": "2023-12-20",
      "category": "Fiction",
      "description": "A science fiction epic about politics, religion, and power set on the desert planet Arrakis.",
      "ratings": 4.7
    },
    {
      "title": "The 48 Laws of Power",
      "image": [laws],
      "bestSeller": "true",
      "author": "Robert Greene",
      "price": 19.99,
      "posted_date": "2024-01-15",
      "category": "Self-Help",
      "description": "A guide to mastering power dynamics in various spheres of life, drawing on historical examples.",
      "ratings": 4.5
    },
    {
      "title": "Harry Potter and the Sorcerer's Stone",
      "image": [harry],
      "bestSeller": "true",
      "author": "J.K. Rowling",
      "price": 9.99,
      "posted_date": "2024-02-01",
      "category": "Fantasy",
      "description": "The first book in the Harry Potter series, introducing the young wizard and his magical adventures.",
      "ratings": 4.9
    },
    {
      "title": "Sapiens: A Brief History of Humankind",
      "image": [sapiens],
      "author": "Yuval Noah Harari",
      "price": 18.99,
      "posted_date": "2024-03-12",
      "category": "History",
      "description": "An exploration of human history, from the Stone Age to the modern era, and the forces that shaped us.",
      "ratings": 4.8
    },
    {
      "title": "Pride and Prejudice",
      "image": [pride],
      "author": "Jane Austen",
      "price": 6.99,
      "posted_date": "2024-04-05",
      "category": "Romance",
      "description": "A timeless romantic novel about the manners and matrimonial machinations of Regency England.",
      "ratings": 4.7
    },
    {
      "title": "Becoming",
      "author": "Michelle Obama",
      "price": 16.99,
      "posted_date": "2024-05-18",
      "category": "Memoir",
      "description": "A deeply personal memoir by the former First Lady of the United States.",
      "ratings": 4.9
    },
    {
      "title": "The Midnight Library",
      "author": "Matt Haig",
      "price": 11.99,
      "posted_date": "2024-06-10",
      "category": "Fiction",
      "description": "A novel about all the choices that go into a life well lived.",
      "ratings": 4.7
    },
    {
      "title": "Rich Dad Poor Dad",
      "author": "Robert T. Kiyosaki",
      "price": 12.99,
      "posted_date": "2024-07-22",
      "category": "Self-Help",
      "description": "A book that challenges conventional wisdom about money and provides insights on financial independence.",
      "ratings": 4.6
    },
    {
      "title": "1984",
      "author": "George Orwell",
      "price": 8.99,
      "posted_date": "2024-08-14",
      "category": "Dystopian",
      "description": "A chilling novel about a totalitarian regime that controls every aspect of life.",
      "ratings": 4.8
    },
    {
      "title": "The Subtle Art of Not Giving a F*ck",
      "author": "Mark Manson",
      "price": 14.49,
      "posted_date": "2024-09-03",
      "category": "Self-Help",
      "description": "A counterintuitive approach to living a good life, emphasizing values and meaning.",
      "ratings": 4.5
    },
    {
      "title": "The Catcher in the Rye",
      "author": "J.D. Salinger",
      "price": 9.99,
      "posted_date": "2024-10-10",
      "category": "Fiction",
      "description": "A novel about teenage rebellion and the angst of growing up.",
      "ratings": 4.4
    },
    {
      "title": "The Power of Now",
      "author": "Eckhart Tolle",
      "price": 13.99,
      "posted_date": "2024-11-22",
      "category": "Spirituality",
      "description": "A guide to spiritual enlightenment and living in the present moment.",
      "ratings": 4.6
    },
    {
      "title": "The Road",
      "author": "Cormac McCarthy",
      "price": 11.99,
      "posted_date": "2024-12-15",
      "category": "Non-Fiction",
      "description": "A bleak but moving story about a father and son's journey in a devastated world.",
      "ratings": 4.7
    },
    {
      "title": "A Promised Land",
      "author": "Barack Obama",
      "price": 21.99,
      "posted_date": "2025-01-05",
      "category": "Memoir",
      "description": "The presidential memoir by Barack Obama, reflecting on his early political career and presidency.",
      "ratings": 4.8
    },
    {
      "title": "Circe",
      "author": "Madeline Miller",
      "price": 12.99,
      "posted_date": "2025-01-10",
      "category": "Mythology",
      "description": "A retelling of the life of Circe, the witch from Greek mythology.",
      "ratings": 4.8
    }
  ]
  

