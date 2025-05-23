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
import becoming from './becoming.jpg'
import midnight_library from './midnight_library.jpeg'
import rich_dad from './rich_dad.jpeg'
import yearbook from './yearbook.png'
import subtle_art from './subtle_art.jpg'
import catcher_rye from './catcher_rye.jpg'
import power_now from './power_now.jpeg'
import road from './road.jpeg'
import promised_land from './promised_land.jpg'
import circe from './circe.jpg'
import bin_icon from './bin_icon.png'
import visa from './visa.png'
import mastercard from './mastercard.png'


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
    cross_icon,
    bin_icon,
    visa,
    mastercard
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
          "id": 2,
          "title": "To Kill a Mockingbird",
          "image": [mockingbird],
          "author": "Harper Lee",
          "price": 8.99,
          "posted_date": "2023-05-22",
          "category": "Fiction",
          "description": "A Pulitzer Prize-winning novel that examines racial injustice and moral growth in the American South.",
          "bestSeller": "true",
          "ratings": 4.9
        },
        {
          "id": 3,
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
          "id": 4,
          "title": "The Alchemist",
          "image": [alchemist],
          "author": "Paulo Coelho",
          "price": 12.49,
          "posted_date": "2023-09-10",
          "category": "Philosophy",
          "description": "A philosophical tale about following your dreams and discovering your personal legend.",
          "bestSeller": "true",
          "ratings": 4.6
        },
        {
          "id": 5,
          "title": "Educated",
          "image": [educated],
          "author": "Tara Westover",
          "price": 13.99,
          "posted_date": "2023-11-05",
          "category": "Memoir",
          "description": "A memoir about growing up in a strict and abusive household and pursuing an education against all odds.",
          "bestSeller": "true",
          "ratings": 4.8
        },
        {
          "id": 6,
          "title": "Dune",
          "image": [dune],
          "author": "Frank Herbert",
          "price": 14.99,
          "posted_date": "2023-12-20",
          "category": "Fiction",
          "description": "A science fiction epic about politics, religion, and power set on the desert planet Arrakis.",
          "bestSeller": "true",
          "ratings": 4.7
        },
        {
          "id": 7,
          "title": "The 48 Laws of Power",
          "image": [laws],
          "author": "Robert Greene",
          "price": 19.99,
          "posted_date": "2024-01-15",
          "category": "Self-Help",
          "description": "A guide to mastering power dynamics in various spheres of life, drawing on historical examples.",
          "bestSeller": "true",
          "ratings": 4.5
        },
        {
          "id": 8,
          "title": "Harry Potter and the Sorcerer's Stone",
          "image": [harry],
          "author": "J.K. Rowling",
          "price": 9.99,
          "posted_date": "2024-02-01",
          "category": "Fantasy",
          "description": "The first book in the Harry Potter series, introducing the young wizard and his magical adventures.",
          "bestSeller": "true",
          "ratings": 4.9
        },
        {
          "id": 9,
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
          "id": 10,
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
          "id": 11,
          "title": "Becoming",
          "image": [becoming],
          "author": "Michelle Obama",
          "price": 16.99,
          "posted_date": "2024-05-18",
          "category": "Memoir",
          "description": "A deeply personal memoir by the former First Lady of the United States.",
          "ratings": 4.9
        },
        {
          "id": 12,
          "title": "The Midnight Library",
          "image": [midnight_library],
          "author": "Matt Haig",
          "price": 11.99,
          "posted_date": "2024-06-10",
          "category": "Fiction",
          "description": "A novel about all the choices that go into a life well lived.",
          "ratings": 4.7
        },
        {
          "id": 13,
          "title": "Rich Dad Poor Dad",
          "image": [rich_dad],
          "author": "Robert T. Kiyosaki",
          "price": 12.99,
          "posted_date": "2024-07-22",
          "category": "Self-Help",
          "description": "A book that challenges conventional wisdom about money and provides insights on financial independence.",
          "ratings": 4.6
        },
        {
          "id": 14,
          "title": "1984",
          "image": [yearbook],
          "author": "George Orwell",
          "price": 8.99,
          "posted_date": "2024-08-14",
          "category": "Dystopian",
          "description": "A chilling novel about a totalitarian regime that controls every aspect of life.",
          "ratings": 4.8
        },
        {
          "id": 15,
          "title": "The Subtle Art of Not Giving a F*ck",
          "image": [subtle_art],
          "author": "Mark Manson",
          "price": 14.49,
          "posted_date": "2024-09-03",
          "category": "Self-Help",
          "description": "A counterintuitive approach to living a good life, emphasizing values and meaning.",
          "ratings": 4.5
        },
        {
          "id": 16,
          "title": "The Catcher in the Rye",
          "image": [catcher_rye],
          "author": "J.D. Salinger",
          "price": 9.99,
          "posted_date": "2024-10-10",
          "category": "Fiction",
          "description": "A novel about teenage rebellion and the angst of growing up.",
          "ratings": 4.4
        },
        {
          "id": 17,
          "title": "The Power of Now",
          "image": [power_now],
          "author": "Eckhart Tolle",
          "price": 13.99,
          "posted_date": "2024-11-22",
          "category": "Spirituality",
          "description": "A guide to spiritual enlightenment and living in the present moment.",
          "ratings": 4.6
        },
        {
          "id": 18,
          "title": "The Road",
          "image": [road],
          "author": "Cormac McCarthy",
          "price": 11.99,
          "posted_date": "2024-12-15",
          "category": "Non-Fiction",
          "description": "A bleak but moving story about a father and son's journey in a devastated world.",
          "ratings": 4.7
        },
        {
          "id": 19,
          "title": "A Promised Land",
          "image": [promised_land],
          "author": "Barack Obama",
          "price": 21.99,
          "posted_date": "2025-01-05",
          "category": "Memoir",
          "description": "The presidential memoir by Barack Obama, reflecting on his early political career and presidency.",
          "ratings": 4.8
        },
        {
          "id": 20,
          "title": "Circe",
          "image": [circe],
          "author": "Madeline Miller",
          "price": 12.99,
          "posted_date": "2025-01-10",
          "category": "Mythology",
          "description": "A retelling of the life of Circe, the witch from Greek mythology.",
          "ratings": 4.8
        }
      
  ]
  

