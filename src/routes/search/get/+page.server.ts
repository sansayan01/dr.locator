import type { PageServerLoad } from "./$types";
import { error } from "@sveltejs/kit";


// Assuming you have a data file
export const data = [
    {
        "name": "Dr. Christina Hall",
        "speciality": "General Surgeon",
        "experience_years": 39,
        "city": "Kolkata"
    },
    {
        "name": "Dr. Teresa Bradley",
        "speciality": "Urologist",
        "experience_years": 20,
        "city": "Patiala"
    },
    {
        "name": "Dr. Noah Phillips",
        "speciality": "General Surgeon",
        "experience_years": 26,
        "city": "Varanasi"
    },
    {
        "name": "Dr. Valerie Young",
        "speciality": "Pediatrician",
        "experience_years": 4,
        "city": "Nizamabad"
    },
    {
        "name": "Dr. Andrew Gonzalez",
        "speciality": "Cardiologist",
        "experience_years": 39,
        "city": "Ranchi"
    },
    {
        "name": "Dr. Thomas Porter DVM",
        "speciality": "Ophthalmologist",
        "experience_years": 4,
        "city": "Haridwar"
    },
    {
        "name": "Dr. David Allen",
        "speciality": "Anesthesiologist",
        "experience_years": 8,
        "city": "Surat"
    },
    {
        "name": "Dr. Michelle Adams",
        "speciality": "Pediatrician",
        "experience_years": 1,
        "city": "Kullu"
    },
    {
        "name": "Dr. Wyatt Underwood",
        "speciality": "Dentist",
        "experience_years": 39,
        "city": "Salem"
    },
    {
        "name": "Dr. Ronald Carter",
        "speciality": "Gynecologist",
        "experience_years": 28,
        "city": "Puri"
    },
    {
        "name": "Dr. Kristina Blevins",
        "speciality": "Anesthesiologist",
        "experience_years": 17,
        "city": "Kota"
    },
    {
        "name": "Dr. Matthew Perez",
        "speciality": "Dentist",
        "experience_years": 21,
        "city": "Surat"
    },
    {
        "name": "Dr. Nicole Acevedo",
        "speciality": "Orthopedic Surgeon",
        "experience_years": 11,
        "city": "Jabalpur"
    },
    {
        "name": "Dr. Carrie Mills",
        "speciality": "Radiologist",
        "experience_years": 12,
        "city": "Karaikal"
    },
    {
        "name": "Dr. Pamela Murphy",
        "speciality": "ENT Specialist",
        "experience_years": 34,
        "city": "Karnal"
    },
    {
        "name": "Dr. Marie Miller",
        "speciality": "Cardiologist",
        "experience_years": 30,
        "city": "Panaji"
    },
    {
        "name": "Dr. Linda Costa DDS",
        "speciality": "Ophthalmologist",
        "experience_years": 24,
        "city": "Ponda"
    },
    {
        "name": "Dr. Joseph Schneider",
        "speciality": "ENT Specialist",
        "experience_years": 14,
        "city": "Kota"
    },
    {
        "name": "Dr. Glenn Carrillo DDS",
        "speciality": "Urologist",
        "experience_years": 17,
        "city": "Old Delhi"
    },
    {
        "name": "Dr. Carl Cole",
        "speciality": "Oncologist",
        "experience_years": 38,
        "city": "Ambala"
    },
    {
        "name": "Dr. Daniel Ford",
        "speciality": "Anesthesiologist",
        "experience_years": 38,
        "city": "Muzaffarpur"
    },
    {
        "name": "Dr. Tina Schroeder",
        "speciality": "Neurologist",
        "experience_years": 9,
        "city": "Jalandhar"
    },
    {
        "name": "Dr. Megan Washington",
        "speciality": "Radiologist",
        "experience_years": 27,
        "city": "Rourkela"
    },
    {
        "name": "Dr. John Wright PhD",
        "speciality": "Dermatologist",
        "experience_years": 2,
        "city": "Lucknow"
    },
    {
        "name": "Dr. Kelly Wallace",
        "speciality": "Orthopedic Surgeon",
        "experience_years": 32,
        "city": "Dhanbad"
    },
    {
        "name": "Dr. Brian Watson",
        "speciality": "Radiologist",
        "experience_years": 20,
        "city": "Thiruvananthapuram"
    },
    {
        "name": "Dr. Eric Mercer",
        "speciality": "Oncologist",
        "experience_years": 21,
        "city": "Kullu"
    },
    {
        "name": "Dr. Melanie Perez",
        "speciality": "Gynecologist",
        "experience_years": 7,
        "city": "Belagavi"
    },
    {
        "name": "Dr. Mark Harding",
        "speciality": "Radiologist",
        "experience_years": 1,
        "city": "Margao"
    },
    {
        "name": "Dr. Nancy Allen",
        "speciality": "Neurologist",
        "experience_years": 38,
        "city": "Lucknow"
    },
    {
        "name": "Dr. Sarah Hoffman",
        "speciality": "Dermatologist",
        "experience_years": 10,
        "city": "Thrissur"
    },
    {
        "name": "Dr. Jeffrey Vaughan",
        "speciality": "Radiologist",
        "experience_years": 31,
        "city": "Darbhanga"
    },
    {
        "name": "Dr. Michele Morse",
        "speciality": "Dermatologist",
        "experience_years": 15,
        "city": "Bhagalpur"
    },
    {
        "name": "Dr. Mr. Brent Herring",
        "speciality": "Pediatrician",
        "experience_years": 16,
        "city": "Haridwar"
    },
    {
        "name": "Dr. Teresa Wilson",
        "speciality": "Pediatrician",
        "experience_years": 26,
        "city": "Gwalior"
    },
    {
        "name": "Dr. Cheryl Anderson",
        "speciality": "Oncologist",
        "experience_years": 25,
        "city": "Mangaluru"
    },
    {
        "name": "Dr. Michael Hamilton",
        "speciality": "Urologist",
        "experience_years": 36,
        "city": "Surat"
    },
    {
        "name": "Dr. Roberto Martin",
        "speciality": "Pediatrician",
        "experience_years": 15,
        "city": "Silchar"
    },
    {
        "name": "Dr. Michael Robertson",
        "speciality": "Ophthalmologist",
        "experience_years": 19,
        "city": "Patiala"
    },
    {
        "name": "Dr. Rebecca Friedman",
        "speciality": "Anesthesiologist",
        "experience_years": 19,
        "city": "Puducherry"
    },
    {
        "name": "Dr. Jason Hansen",
        "speciality": "Urologist",
        "experience_years": 18,
        "city": "Karaikal"
    },
    {
        "name": "Dr. Anthony Ray",
        "speciality": "Dentist",
        "experience_years": 24,
        "city": "Hyderabad"
    },
    {
        "name": "Dr. Patricia Mitchell",
        "speciality": "General Surgeon",
        "experience_years": 11,
        "city": "Karnal"
    },
    {
        "name": "Dr. Ariel Gonzalez",
        "speciality": "Anesthesiologist",
        "experience_years": 16,
        "city": "Varanasi"
    },
    {
        "name": "Dr. Michael Evans",
        "speciality": "Dentist",
        "experience_years": 6,
        "city": "Guwahati"
    },
    {
        "name": "Dr. Jeffrey Brown",
        "speciality": "Psychiatrist",
        "experience_years": 16,
        "city": "Cuttack"
    },
    {
        "name": "Dr. Diana Sanchez",
        "speciality": "Anesthesiologist",
        "experience_years": 27,
        "city": "Mumbai"
    },
    {
        "name": "Dr. Laura Guerrero",
        "speciality": "Nephrologist",
        "experience_years": 29,
        "city": "Varanasi"
    },
    {
        "name": "Dr. Nicholas Rice",
        "speciality": "Cardiologist",
        "experience_years": 39,
        "city": "New Delhi"
    },
    {
        "name": "Dr. Timothy Brady",
        "speciality": "General Surgeon",
        "experience_years": 8,
        "city": "Kolkata"
    },
    {
        "name": "Dr. Jason Lopez",
        "speciality": "Gynecologist",
        "experience_years": 36,
        "city": "Jamshedpur"
    },
    {
        "name": "Dr. Melissa Lopez",
        "speciality": "Radiologist",
        "experience_years": 13,
        "city": "Jodhpur"
    },
    {
        "name": "Dr. Pedro Woods",
        "speciality": "ENT Specialist",
        "experience_years": 22,
        "city": "Karimnagar"
    },
    {
        "name": "Dr. Miss Kimberly Morris",
        "speciality": "Ophthalmologist",
        "experience_years": 26,
        "city": "Nizamabad"
    },
    {
        "name": "Dr. Kimberly Watts",
        "speciality": "Gynecologist",
        "experience_years": 10,
        "city": "Bhagalpur"
    },
    {
        "name": "Dr. Miranda Haynes",
        "speciality": "Anesthesiologist",
        "experience_years": 15,
        "city": "Ajmer"
    },
    {
        "name": "Dr. Cheryl Jackson",
        "speciality": "Anesthesiologist",
        "experience_years": 25,
        "city": "Solan"
    },
    {
        "name": "Dr. Michael Moran",
        "speciality": "Cardiologist",
        "experience_years": 5,
        "city": "Kozhikode"
    },
    {
        "name": "Dr. Ashley Willis",
        "speciality": "ENT Specialist",
        "experience_years": 27,
        "city": "Rishikesh"
    },
    {
        "name": "Dr. Joseph Bryant",
        "speciality": "Dermatologist",
        "experience_years": 28,
        "city": "Puducherry"
    },
    {
        "name": "Dr. Melissa Jones",
        "speciality": "Gynecologist",
        "experience_years": 26,
        "city": "Ahmedabad"
    },
    {
        "name": "Dr. Tammy Crawford",
        "speciality": "Cardiologist",
        "experience_years": 10,
        "city": "Bhubaneswar"
    },
    {
        "name": "Dr. Patrick Lang",
        "speciality": "Ophthalmologist",
        "experience_years": 23,
        "city": "Amritsar"
    },
    {
        "name": "Dr. Mikayla Dennis",
        "speciality": "Ophthalmologist",
        "experience_years": 8,
        "city": "Cuttack"
    },
    {
        "name": "Dr. Marc Castaneda MD",
        "speciality": "Pediatrician",
        "experience_years": 30,
        "city": "Jabalpur"
    },
    {
        "name": "Dr. Tom Williams",
        "speciality": "Pediatrician",
        "experience_years": 19,
        "city": "Thiruvananthapuram"
    },
    {
        "name": "Dr. Joshua Espinoza",
        "speciality": "Oncologist",
        "experience_years": 6,
        "city": "Jalandhar"
    },
    {
        "name": "Dr. John Vang",
        "speciality": "Neurologist",
        "experience_years": 16,
        "city": "Hyderabad"
    },
    {
        "name": "Dr. Brittany Smith",
        "speciality": "Cardiologist",
        "experience_years": 36,
        "city": "Hubballi-Dharwad"
    },
    {
        "name": "Dr. Stacey Key",
        "speciality": "Psychiatrist",
        "experience_years": 8,
        "city": "Coimbatore"
    },
    {
        "name": "Dr. Alexis Vazquez",
        "speciality": "Anesthesiologist",
        "experience_years": 3,
        "city": "Kochi"
    },
    {
        "name": "Dr. Barbara Robinson",
        "speciality": "ENT Specialist",
        "experience_years": 9,
        "city": "Khammam"
    },
    {
        "name": "Dr. Bryan Kennedy",
        "speciality": "Psychiatrist",
        "experience_years": 33,
        "city": "Gwalior"
    },
    {
        "name": "Dr. Shane Clark",
        "speciality": "Neurologist",
        "experience_years": 15,
        "city": "Nizamabad"
    },
    {
        "name": "Dr. Lisa Bush",
        "speciality": "Radiologist",
        "experience_years": 3,
        "city": "Margao"
    },
    {
        "name": "Dr. James Gay",
        "speciality": "Orthopedic Surgeon",
        "experience_years": 19,
        "city": "Thane"
    },
    {
        "name": "Dr. Michael Duncan DDS",
        "speciality": "Cardiologist",
        "experience_years": 19,
        "city": "Ajmer"
    },
    {
        "name": "Dr. Bob Martin",
        "speciality": "Orthopedic Surgeon",
        "experience_years": 18,
        "city": "Kollam"
    },
    {
        "name": "Dr. David Frank",
        "speciality": "Oncologist",
        "experience_years": 36,
        "city": "Kanpur"
    },
    {
        "name": "Dr. Elizabeth Lindsey",
        "speciality": "Oncologist",
        "experience_years": 9,
        "city": "Raipur"
    },
    {
        "name": "Dr. Guy Miller",
        "speciality": "Neurologist",
        "experience_years": 21,
        "city": "Jalandhar"
    },
    {
        "name": "Dr. Joseph Taylor",
        "speciality": "Neurologist",
        "experience_years": 19,
        "city": "Puri"
    },
    {
        "name": "Dr. Jeremy Wu",
        "speciality": "Ophthalmologist",
        "experience_years": 5,
        "city": "Durgapur"
    },
    {
        "name": "Dr. Rachel Hernandez",
        "speciality": "Oncologist",
        "experience_years": 2,
        "city": "Hazaribagh"
    },
    {
        "name": "Dr. Deanna Bolton",
        "speciality": "Cardiologist",
        "experience_years": 3,
        "city": "Hazaribagh"
    },
    {
        "name": "Dr. Rachel Walker",
        "speciality": "Urologist",
        "experience_years": 38,
        "city": "Dibrugarh"
    },
    {
        "name": "Dr. Garrett Anderson",
        "speciality": "General Surgeon",
        "experience_years": 22,
        "city": "Rishikesh"
    },
    {
        "name": "Dr. Mary Brandt",
        "speciality": "Oncologist",
        "experience_years": 39,
        "city": "Tirupati"
    },
    {
        "name": "Dr. Troy Villa",
        "speciality": "Nephrologist",
        "experience_years": 6,
        "city": "Asansol"
    },
    {
        "name": "Dr. Susan Roth",
        "speciality": "ENT Specialist",
        "experience_years": 5,
        "city": "Mysuru"
    },
    {
        "name": "Dr. Maria White",
        "speciality": "Psychiatrist",
        "experience_years": 14,
        "city": "Jodhpur"
    },
    {
        "name": "Dr. Lori Smith",
        "speciality": "Urologist",
        "experience_years": 13,
        "city": "Guwahati"
    },
    {
        "name": "Dr. Brian Hernandez",
        "speciality": "Dermatologist",
        "experience_years": 10,
        "city": "Haridwar"
    },
    {
        "name": "Dr. Karen White",
        "speciality": "Pediatrician",
        "experience_years": 24,
        "city": "Jodhpur"
    },
    {
        "name": "Dr. Nicole Ortiz",
        "speciality": "Psychiatrist",
        "experience_years": 16,
        "city": "Jodhpur"
    },
    {
        "name": "Dr. Brian Hunter",
        "speciality": "Gynecologist",
        "experience_years": 11,
        "city": "Rajkot"
    },
    {
        "name": "Dr. Joseph Patterson",
        "speciality": "Nephrologist",
        "experience_years": 25,
        "city": "Tirupati"
    },
    {
        "name": "Dr. Mr. Lee Mueller",
        "speciality": "Gynecologist",
        "experience_years": 27,
        "city": "Coimbatore"
    },
    {
        "name": "Dr. Kathryn Mathews",
        "speciality": "Pediatrician",
        "experience_years": 17,
        "city": "Thrissur"
    },
    {
        "name": "Dr. Alexis Gonzalez DDS",
        "speciality": "Dermatologist",
        "experience_years": 13,
        "city": "Siliguri"
    },
    {
        "name": "Dr. Clifford Lucas",
        "speciality": "Neurologist",
        "experience_years": 1,
        "city": "Mangaluru"
    },
    {
        "name": "Dr. Marcus Mann",
        "speciality": "Gynecologist",
        "experience_years": 40,
        "city": "Dehradun"
    },
    {
        "name": "Dr. Ashley Shaffer",
        "speciality": "Cardiologist",
        "experience_years": 39,
        "city": "Salem"
    },
    {
        "name": "Dr. Lauren Anderson",
        "speciality": "Radiologist",
        "experience_years": 3,
        "city": "Korba"
    },
    {
        "name": "Dr. Edward Mathews",
        "speciality": "Urologist",
        "experience_years": 15,
        "city": "Lucknow"
    },
    {
        "name": "Dr. Michelle Miller",
        "speciality": "Dermatologist",
        "experience_years": 10,
        "city": "Nizamabad"
    },
    {
        "name": "Dr. Joshua Hicks",
        "speciality": "Dentist",
        "experience_years": 25,
        "city": "Meerut"
    },
    {
        "name": "Dr. Mikayla Moore",
        "speciality": "Cardiologist",
        "experience_years": 38,
        "city": "Ranchi"
    },
    {
        "name": "Dr. Brenda Waller",
        "speciality": "Nephrologist",
        "experience_years": 27,
        "city": "Shimla"
    },
    {
        "name": "Dr. Jacob Berry",
        "speciality": "Orthopedic Surgeon",
        "experience_years": 19,
        "city": "Siliguri"
    },
    {
        "name": "Dr. Alexandra Contreras",
        "speciality": "ENT Specialist",
        "experience_years": 7,
        "city": "Vadodara"
    },
    {
        "name": "Dr. James Short",
        "speciality": "Psychiatrist",
        "experience_years": 30,
        "city": "Ahmedabad"
    },
    {
        "name": "Dr. Jennifer Robinson",
        "speciality": "ENT Specialist",
        "experience_years": 2,
        "city": "Ponda"
    },
    {
        "name": "Dr. Jeffrey Allen",
        "speciality": "Anesthesiologist",
        "experience_years": 9,
        "city": "Mysuru"
    },
    {
        "name": "Dr. Howard Simpson",
        "speciality": "Dermatologist",
        "experience_years": 18,
        "city": "Haldwani"
    },
    {
        "name": "Dr. Jennifer Moore",
        "speciality": "General Surgeon",
        "experience_years": 26,
        "city": "Thiruvananthapuram"
    },
    {
        "name": "Dr. Brian Schmitt",
        "speciality": "Urologist",
        "experience_years": 34,
        "city": "Hyderabad"
    },
    {
        "name": "Dr. Nicole Campbell",
        "speciality": "Nephrologist",
        "experience_years": 14,
        "city": "Patna"
    },
    {
        "name": "Dr. Herbert Butler",
        "speciality": "Psychiatrist",
        "experience_years": 9,
        "city": "Kavaratti"
    },
    {
        "name": "Dr. Thomas Shelton",
        "speciality": "General Surgeon",
        "experience_years": 18,
        "city": "Thane"
    },
    {
        "name": "Dr. Jill Jackson",
        "speciality": "Neurologist",
        "experience_years": 40,
        "city": "Rishikesh"
    },
    {
        "name": "Dr. Joseph Garcia",
        "speciality": "Gynecologist",
        "experience_years": 21,
        "city": "Jalandhar"
    },
    {
        "name": "Dr. Cody Hall",
        "speciality": "Pediatrician",
        "experience_years": 11,
        "city": "Thiruvananthapuram"
    },
    {
        "name": "Dr. Nancy Adkins",
        "speciality": "Orthopedic Surgeon",
        "experience_years": 30,
        "city": "Bilaspur"
    },
    {
        "name": "Dr. Zachary Browning",
        "speciality": "Urologist",
        "experience_years": 39,
        "city": "Ambala"
    },
    {
        "name": "Dr. Nicholas Perry",
        "speciality": "Dentist",
        "experience_years": 7,
        "city": "Puducherry"
    },
    {
        "name": "Dr. Kimberly Paul",
        "speciality": "General Surgeon",
        "experience_years": 14,
        "city": "Thrissur"
    },
    {
        "name": "Dr. Joseph Perez",
        "speciality": "Psychiatrist",
        "experience_years": 15,
        "city": "Salem"
    },
    {
        "name": "Dr. Melissa Flores",
        "speciality": "Oncologist",
        "experience_years": 33,
        "city": "Bathinda"
    },
    {
        "name": "Dr. Jeffrey Cruz",
        "speciality": "Psychiatrist",
        "experience_years": 40,
        "city": "Jabalpur"
    },
    {
        "name": "Dr. Michelle Cox",
        "speciality": "Dermatologist",
        "experience_years": 4,
        "city": "Margao"
    },
    {
        "name": "Dr. Gary Stewart",
        "speciality": "Gynecologist",
        "experience_years": 37,
        "city": "Shimla"
    },
    {
        "name": "Dr. Blake Nguyen",
        "speciality": "Radiologist",
        "experience_years": 19,
        "city": "Korba"
    },
    {
        "name": "Dr. Steven Carr",
        "speciality": "Radiologist",
        "experience_years": 6,
        "city": "Patiala"
    },
    {
        "name": "Dr. Jesse Cobb",
        "speciality": "Ophthalmologist",
        "experience_years": 33,
        "city": "Jabalpur"
    },
    {
        "name": "Dr. Charles Murphy",
        "speciality": "Anesthesiologist",
        "experience_years": 20,
        "city": "Howrah"
    },
    {
        "name": "Dr. Eric Edwards",
        "speciality": "Gynecologist",
        "experience_years": 7,
        "city": "Margao"
    },
    {
        "name": "Dr. Melissa Peck",
        "speciality": "Gynecologist",
        "experience_years": 20,
        "city": "Kullu"
    },
    {
        "name": "Dr. Linda Bush",
        "speciality": "Urologist",
        "experience_years": 15,
        "city": "Mapusa"
    },
    {
        "name": "Dr. Donald Perez",
        "speciality": "ENT Specialist",
        "experience_years": 35,
        "city": "Panaji"
    },
    {
        "name": "Dr. Brandon Roth",
        "speciality": "Oncologist",
        "experience_years": 17,
        "city": "Coimbatore"
    },
    {
        "name": "Dr. Jennifer Garza",
        "speciality": "Orthopedic Surgeon",
        "experience_years": 15,
        "city": "Surat"
    },
    {
        "name": "Dr. Peggy Holland",
        "speciality": "Neurologist",
        "experience_years": 20,
        "city": "Hyderabad"
    },
    {
        "name": "Dr. Jacob Hall",
        "speciality": "ENT Specialist",
        "experience_years": 40,
        "city": "Guntur"
    },
    {
        "name": "Dr. Laura Perez",
        "speciality": "ENT Specialist",
        "experience_years": 18,
        "city": "Durgapur"
    },
    {
        "name": "Dr. Kayla Bryant",
        "speciality": "Psychiatrist",
        "experience_years": 10,
        "city": "Mumbai"
    },
    {
        "name": "Dr. Gina Douglas",
        "speciality": "Psychiatrist",
        "experience_years": 23,
        "city": "Pune"
    },
    {
        "name": "Dr. John Townsend",
        "speciality": "Oncologist",
        "experience_years": 37,
        "city": "Dibrugarh"
    },
    {
        "name": "Dr. Nicole Gross",
        "speciality": "Anesthesiologist",
        "experience_years": 15,
        "city": "Ahmedabad"
    },
    {
        "name": "Dr. Kari Pollard",
        "speciality": "General Surgeon",
        "experience_years": 31,
        "city": "Bhagalpur"
    },
    {
        "name": "Dr. Dr. Jason Cherry PhD",
        "speciality": "Urologist",
        "experience_years": 27,
        "city": "New Delhi"
    },
    {
        "name": "Dr. Angela Shannon",
        "speciality": "General Surgeon",
        "experience_years": 12,
        "city": "Belagavi"
    },
    {
        "name": "Dr. Richard Small",
        "speciality": "ENT Specialist",
        "experience_years": 36,
        "city": "Bhopal"
    },
    {
        "name": "Dr. Rick Miller",
        "speciality": "Ophthalmologist",
        "experience_years": 15,
        "city": "Karaikal"
    },
    {
        "name": "Dr. Michelle Romero",
        "speciality": "Neurologist",
        "experience_years": 25,
        "city": "Gurgaon"
    },
    {
        "name": "Dr. Deborah Lin",
        "speciality": "Anesthesiologist",
        "experience_years": 19,
        "city": "Gurgaon"
    },
    {
        "name": "Dr. William Fischer",
        "speciality": "Oncologist",
        "experience_years": 12,
        "city": "Panaji"
    },
    {
        "name": "Dr. Dr. Scott Torres",
        "speciality": "Pediatrician",
        "experience_years": 15,
        "city": "Siliguri"
    },
    {
        "name": "Dr. Benjamin Myers",
        "speciality": "ENT Specialist",
        "experience_years": 18,
        "city": "Jamshedpur"
    },
    {
        "name": "Dr. Emily Fleming",
        "speciality": "Pediatrician",
        "experience_years": 19,
        "city": "Indore"
    },
    {
        "name": "Dr. Mr. Raymond Davis",
        "speciality": "Neurologist",
        "experience_years": 38,
        "city": "Silchar"
    },
    {
        "name": "Dr. Gregory Rubio",
        "speciality": "Orthopedic Surgeon",
        "experience_years": 1,
        "city": "Dharamshala"
    },
    {
        "name": "Dr. Angie Wang",
        "speciality": "Nephrologist",
        "experience_years": 12,
        "city": "Hubballi-Dharwad"
    },
    {
        "name": "Dr. Michelle Huber",
        "speciality": "ENT Specialist",
        "experience_years": 9,
        "city": "Karimnagar"
    },
    {
        "name": "Dr. Brenda Crosby",
        "speciality": "Dermatologist",
        "experience_years": 13,
        "city": "Karnal"
    },
    {
        "name": "Dr. Christopher Simmons",
        "speciality": "Gynecologist",
        "experience_years": 35,
        "city": "Silvassa"
    },
    {
        "name": "Dr. Debra Ho",
        "speciality": "Nephrologist",
        "experience_years": 2,
        "city": "Dharamshala"
    },
    {
        "name": "Dr. Lisa Bailey",
        "speciality": "Nephrologist",
        "experience_years": 36,
        "city": "Chennai"
    },
    {
        "name": "Dr. Cody Smith",
        "speciality": "Neurologist",
        "experience_years": 25,
        "city": "Jamshedpur"
    },
    {
        "name": "Dr. Ryan Mercado",
        "speciality": "Dermatologist",
        "experience_years": 33,
        "city": "Gaya"
    },
    {
        "name": "Dr. Caleb Daniel",
        "speciality": "Dermatologist",
        "experience_years": 40,
        "city": "Bhagalpur"
    },
    {
        "name": "Dr. Lauren Blake",
        "speciality": "Gynecologist",
        "experience_years": 13,
        "city": "Korba"
    },
    {
        "name": "Dr. Joshua Jennings",
        "speciality": "Dermatologist",
        "experience_years": 25,
        "city": "Karnal"
    },
    {
        "name": "Dr. Amy Key",
        "speciality": "Psychiatrist",
        "experience_years": 23,
        "city": "Pune"
    },
    {
        "name": "Dr. Anthony Shepherd",
        "speciality": "Nephrologist",
        "experience_years": 39,
        "city": "Salem"
    },
    {
        "name": "Dr. Jennifer Warner",
        "speciality": "Dentist",
        "experience_years": 25,
        "city": "Hazaribagh"
    },
    {
        "name": "Dr. Teresa Rodriguez",
        "speciality": "Ophthalmologist",
        "experience_years": 18,
        "city": "Silvassa"
    },
    {
        "name": "Dr. Kevin Malone",
        "speciality": "Pediatrician",
        "experience_years": 5,
        "city": "Patiala"
    },
    {
        "name": "Dr. Peter Martinez",
        "speciality": "Pediatrician",
        "experience_years": 5,
        "city": "Udaipur"
    },
    {
        "name": "Dr. Heather Smith",
        "speciality": "Gynecologist",
        "experience_years": 18,
        "city": "Hubballi-Dharwad"
    },
    {
        "name": "Dr. Dr. Wayne Le",
        "speciality": "Radiologist",
        "experience_years": 5,
        "city": "Dibrugarh"
    },
    {
        "name": "Dr. Mr. Christopher Kim",
        "speciality": "ENT Specialist",
        "experience_years": 29,
        "city": "Bhagalpur"
    },
    {
        "name": "Dr. Alexander Washington",
        "speciality": "Dentist",
        "experience_years": 5,
        "city": "Bengaluru"
    },
    {
        "name": "Dr. Lisa Cruz",
        "speciality": "Cardiologist",
        "experience_years": 25,
        "city": "Coimbatore"
    },
    {
        "name": "Dr. Anthony Myers",
        "speciality": "Neurologist",
        "experience_years": 13,
        "city": "Ahmedabad"
    },
    {
        "name": "Dr. Theodore Harrison",
        "speciality": "General Surgeon",
        "experience_years": 8,
        "city": "Visakhapatnam"
    },
    {
        "name": "Dr. Lacey Watson",
        "speciality": "ENT Specialist",
        "experience_years": 28,
        "city": "Lucknow"
    },
    {
        "name": "Dr. David Sullivan",
        "speciality": "Radiologist",
        "experience_years": 31,
        "city": "Thrissur"
    },
    {
        "name": "Dr. Kelly Taylor",
        "speciality": "Cardiologist",
        "experience_years": 30,
        "city": "Jorhat"
    },
    {
        "name": "Dr. Patricia Mullen",
        "speciality": "Anesthesiologist",
        "experience_years": 38,
        "city": "Nashik"
    },
    {
        "name": "Dr. Brenda Winters",
        "speciality": "Ophthalmologist",
        "experience_years": 5,
        "city": "Durgapur"
    },
    {
        "name": "Dr. Erika Nguyen",
        "speciality": "Pediatrician",
        "experience_years": 12,
        "city": "Dibrugarh"
    },
    {
        "name": "Dr. Caitlyn Lewis",
        "speciality": "Anesthesiologist",
        "experience_years": 28,
        "city": "Nizamabad"
    },
    {
        "name": "Dr. Amanda Gonzales",
        "speciality": "General Surgeon",
        "experience_years": 9,
        "city": "Jaipur"
    },
    {
        "name": "Dr. Kathy Campbell",
        "speciality": "Gynecologist",
        "experience_years": 20,
        "city": "Kochi"
    },
    {
        "name": "Dr. Melissa Kim",
        "speciality": "Radiologist",
        "experience_years": 5,
        "city": "Ajmer"
    },
    {
        "name": "Dr. David Duncan",
        "speciality": "Cardiologist",
        "experience_years": 1,
        "city": "Hubballi-Dharwad"
    },
    {
        "name": "Dr. Melissa Fitzgerald",
        "speciality": "Cardiologist",
        "experience_years": 29,
        "city": "Kanpur"
    },
    {
        "name": "Dr. Roy Beasley",
        "speciality": "Psychiatrist",
        "experience_years": 39,
        "city": "Jamshedpur"
    },
    {
        "name": "Dr. Jennifer Meadows",
        "speciality": "Dermatologist",
        "experience_years": 23,
        "city": "Gurgaon"
    },
    {
        "name": "Dr. Jennifer Martin",
        "speciality": "Orthopedic Surgeon",
        "experience_years": 26,
        "city": "Mumbai"
    },
    {
        "name": "Dr. Felicia Hart",
        "speciality": "Radiologist",
        "experience_years": 25,
        "city": "Ponda"
    },
    {
        "name": "Dr. Jeffrey Miller",
        "speciality": "Oncologist",
        "experience_years": 23,
        "city": "Kanpur"
    },
    {
        "name": "Dr. Jennifer Stewart",
        "speciality": "Pediatrician",
        "experience_years": 1,
        "city": "Nagpur"
    },
    {
        "name": "Dr. Juan Perry",
        "speciality": "Orthopedic Surgeon",
        "experience_years": 2,
        "city": "Kanpur"
    },
    {
        "name": "Dr. Mrs. Jody Harris",
        "speciality": "Dentist",
        "experience_years": 20,
        "city": "Jalandhar"
    },
    {
        "name": "Dr. Benjamin Green",
        "speciality": "Dentist",
        "experience_years": 2,
        "city": "Udaipur"
    },
    {
        "name": "Dr. Lawrence Jackson",
        "speciality": "General Surgeon",
        "experience_years": 40,
        "city": "Kozhikode"
    },
    {
        "name": "Dr. Henry Gay",
        "speciality": "Dermatologist",
        "experience_years": 36,
        "city": "New Delhi"
    },
    {
        "name": "Dr. Joshua Ramos",
        "speciality": "Pediatrician",
        "experience_years": 4,
        "city": "Dhanbad"
    },
    {
        "name": "Dr. Ryan Brooks",
        "speciality": "Psychiatrist",
        "experience_years": 24,
        "city": "Mysuru"
    },
    {
        "name": "Dr. Mike Rollins",
        "speciality": "Ophthalmologist",
        "experience_years": 20,
        "city": "Kolkata"
    },
    {
        "name": "Dr. Christy Patrick",
        "speciality": "ENT Specialist",
        "experience_years": 29,
        "city": "Kochi"
    },
    {
        "name": "Dr. Nicholas Hansen",
        "speciality": "Cardiologist",
        "experience_years": 34,
        "city": "Karimnagar"
    },
    {
        "name": "Dr. Shannon Wilson",
        "speciality": "Neurologist",
        "experience_years": 9,
        "city": "Siliguri"
    },
    {
        "name": "Dr. Elizabeth Rodriguez",
        "speciality": "Nephrologist",
        "experience_years": 19,
        "city": "Panipat"
    },
    {
        "name": "Dr. Patricia Benton",
        "speciality": "Dentist",
        "experience_years": 31,
        "city": "Khammam"
    },
    {
        "name": "Dr. Benjamin Weaver",
        "speciality": "Oncologist",
        "experience_years": 15,
        "city": "Silvassa"
    },
    {
        "name": "Dr. Kayla Sutton",
        "speciality": "Dentist",
        "experience_years": 37,
        "city": "Faridabad"
    },
    {
        "name": "Dr. Jamie Erickson",
        "speciality": "Psychiatrist",
        "experience_years": 16,
        "city": "Darbhanga"
    },
    {
        "name": "Dr. Kelly Blackburn",
        "speciality": "Dermatologist",
        "experience_years": 28,
        "city": "Port Blair"
    },
    {
        "name": "Dr. Cheryl Collier",
        "speciality": "Orthopedic Surgeon",
        "experience_years": 36,
        "city": "Agra"
    },
    {
        "name": "Dr. Harold Johnson",
        "speciality": "Orthopedic Surgeon",
        "experience_years": 26,
        "city": "Kozhikode"
    },
    {
        "name": "Dr. Crystal Adams",
        "speciality": "Pediatrician",
        "experience_years": 19,
        "city": "Tezpur"
    },
    {
        "name": "Dr. Samuel Cooper",
        "speciality": "Ophthalmologist",
        "experience_years": 1,
        "city": "Cuttack"
    },
    {
        "name": "Dr. Timothy Sullivan",
        "speciality": "Orthopedic Surgeon",
        "experience_years": 32,
        "city": "Salem"
    },
    {
        "name": "Dr. Steven Clark",
        "speciality": "Dermatologist",
        "experience_years": 36,
        "city": "Mandi"
    },
    {
        "name": "Dr. Sergio Harris",
        "speciality": "Urologist",
        "experience_years": 12,
        "city": "Jodhpur"
    },
    {
        "name": "Dr. John Young",
        "speciality": "Urologist",
        "experience_years": 23,
        "city": "Gaya"
    },
    {
        "name": "Dr. Lynn Mccullough",
        "speciality": "Nephrologist",
        "experience_years": 18,
        "city": "Kolkata"
    },
    {
        "name": "Dr. Kathleen Sanchez",
        "speciality": "Psychiatrist",
        "experience_years": 36,
        "city": "Patna"
    },
    {
        "name": "Dr. Guy Reed",
        "speciality": "Dentist",
        "experience_years": 26,
        "city": "Ajmer"
    },
    {
        "name": "Dr. Sherry Fisher",
        "speciality": "Psychiatrist",
        "experience_years": 4,
        "city": "Daman"
    },
    {
        "name": "Dr. Michael Hernandez",
        "speciality": "Urologist",
        "experience_years": 37,
        "city": "Agra"
    },
    {
        "name": "Dr. Curtis Robinson",
        "speciality": "Radiologist",
        "experience_years": 12,
        "city": "Dharamshala"
    },
    {
        "name": "Dr. Alexander Williams",
        "speciality": "Gynecologist",
        "experience_years": 1,
        "city": "Dhanbad"
    },
    {
        "name": "Dr. Sue Terrell",
        "speciality": "Cardiologist",
        "experience_years": 22,
        "city": "Chennai"
    },
    {
        "name": "Dr. Nicole Jones",
        "speciality": "Dermatologist",
        "experience_years": 4,
        "city": "Kollam"
    },
    {
        "name": "Dr. Victoria Knox",
        "speciality": "Orthopedic Surgeon",
        "experience_years": 4,
        "city": "Jaipur"
    },
    {
        "name": "Dr. Adam Myers",
        "speciality": "Radiologist",
        "experience_years": 17,
        "city": "Kozhikode"
    },
    {
        "name": "Dr. Donna Mueller",
        "speciality": "Oncologist",
        "experience_years": 23,
        "city": "Jodhpur"
    },
    {
        "name": "Dr. Hannah Lee",
        "speciality": "Dermatologist",
        "experience_years": 25,
        "city": "Vadodara"
    },
    {
        "name": "Dr. Stephanie Lynch",
        "speciality": "ENT Specialist",
        "experience_years": 29,
        "city": "Nizamabad"
    },
    {
        "name": "Dr. Pamela Johnson",
        "speciality": "Oncologist",
        "experience_years": 13,
        "city": "Jamshedpur"
    },
    {
        "name": "Dr. Randy Henson",
        "speciality": "Urologist",
        "experience_years": 12,
        "city": "Jodhpur"
    },
    {
        "name": "Dr. Brandi Ballard",
        "speciality": "Anesthesiologist",
        "experience_years": 1,
        "city": "Nagpur"
    },
    {
        "name": "Dr. Tanya Hall",
        "speciality": "Dermatologist",
        "experience_years": 25,
        "city": "Indore"
    },
    {
        "name": "Dr. Nancy Moore",
        "speciality": "Anesthesiologist",
        "experience_years": 24,
        "city": "Shimla"
    },
    {
        "name": "Dr. William Price",
        "speciality": "Dermatologist",
        "experience_years": 23,
        "city": "Port Blair"
    },
    {
        "name": "Dr. Kimberly Smith",
        "speciality": "Dentist",
        "experience_years": 31,
        "city": "Patiala"
    },
    {
        "name": "Dr. Melissa Archer",
        "speciality": "Pediatrician",
        "experience_years": 27,
        "city": "Darbhanga"
    },
    {
        "name": "Dr. Jessica Short",
        "speciality": "Gynecologist",
        "experience_years": 13,
        "city": "Durg-Bhilai"
    },
    {
        "name": "Dr. Christopher Martin",
        "speciality": "Orthopedic Surgeon",
        "experience_years": 14,
        "city": "Khammam"
    },
    {
        "name": "Dr. Sean Morgan",
        "speciality": "Cardiologist",
        "experience_years": 34,
        "city": "Darbhanga"
    },
    {
        "name": "Dr. David Scott",
        "speciality": "ENT Specialist",
        "experience_years": 8,
        "city": "Roorkee"
    },
    {
        "name": "Dr. Angela Conner",
        "speciality": "Dermatologist",
        "experience_years": 7,
        "city": "Jabalpur"
    },
    {
        "name": "Dr. Jonathan Miller",
        "speciality": "Gynecologist",
        "experience_years": 1,
        "city": "Agra"
    },
    {
        "name": "Dr. Brent Fritz",
        "speciality": "Dermatologist",
        "experience_years": 9,
        "city": "Solan"
    },
    {
        "name": "Dr. Matthew Bradley",
        "speciality": "Dentist",
        "experience_years": 16,
        "city": "Jamshedpur"
    },
    {
        "name": "Dr. Casey Kelly",
        "speciality": "Urologist",
        "experience_years": 37,
        "city": "Tirupati"
    },
    {
        "name": "Dr. Amanda Travis",
        "speciality": "Pediatrician",
        "experience_years": 22,
        "city": "Durg-Bhilai"
    },
    {
        "name": "Dr. Charles Sanders",
        "speciality": "Oncologist",
        "experience_years": 27,
        "city": "Karimnagar"
    },
    {
        "name": "Dr. Joseph Aguilar",
        "speciality": "Gynecologist",
        "experience_years": 8,
        "city": "Meerut"
    },
    {
        "name": "Dr. Kristen Dougherty",
        "speciality": "Orthopedic Surgeon",
        "experience_years": 17,
        "city": "Tezpur"
    },
    {
        "name": "Dr. Crystal Johnson",
        "speciality": "ENT Specialist",
        "experience_years": 22,
        "city": "Solan"
    },
    {
        "name": "Dr. Jennifer Evans",
        "speciality": "ENT Specialist",
        "experience_years": 24,
        "city": "Hubballi-Dharwad"
    },
    {
        "name": "Dr. Emma Fuller",
        "speciality": "Dentist",
        "experience_years": 35,
        "city": "Darbhanga"
    },
    {
        "name": "Dr. Holly Sawyer",
        "speciality": "Orthopedic Surgeon",
        "experience_years": 36,
        "city": "Silvassa"
    },
    {
        "name": "Dr. Tracy Dixon",
        "speciality": "Cardiologist",
        "experience_years": 35,
        "city": "Patiala"
    },
    {
        "name": "Dr. Daniel Smith",
        "speciality": "Cardiologist",
        "experience_years": 38,
        "city": "Jorhat"
    },
    {
        "name": "Dr. Samuel Morgan",
        "speciality": "ENT Specialist",
        "experience_years": 34,
        "city": "Thane"
    },
    {
        "name": "Dr. Antonio Pace",
        "speciality": "Psychiatrist",
        "experience_years": 38,
        "city": "Puducherry"
    },
    {
        "name": "Dr. Melissa Ray",
        "speciality": "ENT Specialist",
        "experience_years": 27,
        "city": "Ahmedabad"
    },
    {
        "name": "Dr. Jane Warren",
        "speciality": "Orthopedic Surgeon",
        "experience_years": 20,
        "city": "Kota"
    },
    {
        "name": "Dr. Jo Osborn",
        "speciality": "ENT Specialist",
        "experience_years": 30,
        "city": "Thane"
    },
    {
        "name": "Dr. Cynthia Jackson",
        "speciality": "Neurologist",
        "experience_years": 15,
        "city": "Indore"
    },
    {
        "name": "Dr. Tina Lawson",
        "speciality": "Dentist",
        "experience_years": 24,
        "city": "Shimla"
    },
    {
        "name": "Dr. Harold Fleming",
        "speciality": "ENT Specialist",
        "experience_years": 39,
        "city": "Belagavi"
    },
    {
        "name": "Dr. Christopher Riley",
        "speciality": "Oncologist",
        "experience_years": 22,
        "city": "Nizamabad"
    },
    {
        "name": "Dr. Michael Acosta",
        "speciality": "Dentist",
        "experience_years": 25,
        "city": "Bilaspur"
    },
    {
        "name": "Dr. James Jackson",
        "speciality": "Oncologist",
        "experience_years": 5,
        "city": "Ahmedabad"
    },
    {
        "name": "Dr. Jordan Freeman",
        "speciality": "Ophthalmologist",
        "experience_years": 21,
        "city": "Jalandhar"
    },
    {
        "name": "Dr. Tara Owen",
        "speciality": "ENT Specialist",
        "experience_years": 27,
        "city": "Ranchi"
    },
    {
        "name": "Dr. Craig Shaw",
        "speciality": "Dentist",
        "experience_years": 21,
        "city": "Agra"
    },
    {
        "name": "Dr. Larry Smith",
        "speciality": "Neurologist",
        "experience_years": 24,
        "city": "Bilaspur"
    },
    {
        "name": "Dr. Kimberly Patel",
        "speciality": "Cardiologist",
        "experience_years": 30,
        "city": "Hubballi-Dharwad"
    },
    {
        "name": "Dr. Sandra Avery",
        "speciality": "ENT Specialist",
        "experience_years": 19,
        "city": "Mumbai"
    },
    {
        "name": "Dr. Jeffrey Woods",
        "speciality": "Cardiologist",
        "experience_years": 13,
        "city": "Coimbatore"
    },
    {
        "name": "Dr. Michael Meadows",
        "speciality": "Gynecologist",
        "experience_years": 15,
        "city": "Jamshedpur"
    },
    {
        "name": "Dr. Stephen Jones",
        "speciality": "Urologist",
        "experience_years": 1,
        "city": "Durg-Bhilai"
    },
    {
        "name": "Dr. Dustin Gibbs",
        "speciality": "Cardiologist",
        "experience_years": 7,
        "city": "Jorhat"
    },
    {
        "name": "Dr. Michael Hubbard",
        "speciality": "Neurologist",
        "experience_years": 2,
        "city": "Guntur"
    },
    {
        "name": "Dr. Kelly Hickman",
        "speciality": "Radiologist",
        "experience_years": 1,
        "city": "Udaipur"
    },
    {
        "name": "Dr. Adrian Nelson",
        "speciality": "Gynecologist",
        "experience_years": 17,
        "city": "Ranchi"
    },
    {
        "name": "Dr. Craig Jackson",
        "speciality": "ENT Specialist",
        "experience_years": 12,
        "city": "Nashik"
    },
    {
        "name": "Dr. Jordan Lopez",
        "speciality": "Dermatologist",
        "experience_years": 13,
        "city": "Ponda"
    },
    {
        "name": "Dr. Katelyn Hester",
        "speciality": "Ophthalmologist",
        "experience_years": 38,
        "city": "Gwalior"
    },
    {
        "name": "Dr. Ryan Bradley",
        "speciality": "General Surgeon",
        "experience_years": 38,
        "city": "Visakhapatnam"
    },
    {
        "name": "Dr. Rachael Griffith",
        "speciality": "Nephrologist",
        "experience_years": 11,
        "city": "Bhubaneswar"
    },
    {
        "name": "Dr. Madeline Ryan",
        "speciality": "ENT Specialist",
        "experience_years": 21,
        "city": "Thiruvananthapuram"
    },
    {
        "name": "Dr. Audrey Taylor",
        "speciality": "General Surgeon",
        "experience_years": 18,
        "city": "Mandi"
    },
    {
        "name": "Dr. Mark Watkins",
        "speciality": "ENT Specialist",
        "experience_years": 5,
        "city": "Mysuru"
    },
    {
        "name": "Dr. Cynthia Velez",
        "speciality": "Pediatrician",
        "experience_years": 29,
        "city": "Panipat"
    },
    {
        "name": "Dr. Terry Griffin",
        "speciality": "ENT Specialist",
        "experience_years": 14,
        "city": "Silvassa"
    },
    {
        "name": "Dr. Tina Mcdaniel",
        "speciality": "Ophthalmologist",
        "experience_years": 31,
        "city": "Guntur"
    },
    {
        "name": "Dr. Heather Perez",
        "speciality": "Cardiologist",
        "experience_years": 27,
        "city": "Rajkot"
    },
    {
        "name": "Dr. Tina Erickson",
        "speciality": "Psychiatrist",
        "experience_years": 17,
        "city": "Visakhapatnam"
    },
    {
        "name": "Dr. Debra Molina",
        "speciality": "Oncologist",
        "experience_years": 18,
        "city": "Madurai"
    },
    {
        "name": "Dr. Kathleen Jackson",
        "speciality": "Anesthesiologist",
        "experience_years": 8,
        "city": "Vadodara"
    },
    {
        "name": "Dr. Elizabeth Macias",
        "speciality": "Neurologist",
        "experience_years": 8,
        "city": "Siliguri"
    },
    {
        "name": "Dr. Lauren Patterson",
        "speciality": "ENT Specialist",
        "experience_years": 11,
        "city": "Surat"
    },
    {
        "name": "Dr. Kelly Harrison",
        "speciality": "General Surgeon",
        "experience_years": 13,
        "city": "Old Delhi"
    },
    {
        "name": "Dr. Gloria Patton",
        "speciality": "Radiologist",
        "experience_years": 12,
        "city": "Kozhikode"
    },
    {
        "name": "Dr. Andrew Williamson",
        "speciality": "Nephrologist",
        "experience_years": 4,
        "city": "Thane"
    },
    {
        "name": "Dr. Sara Glass",
        "speciality": "Urologist",
        "experience_years": 34,
        "city": "Tiruchirappalli"
    },
    {
        "name": "Dr. Mitchell Sanford",
        "speciality": "Pediatrician",
        "experience_years": 37,
        "city": "Jaipur"
    },
    {
        "name": "Dr. Jamie Carr",
        "speciality": "Psychiatrist",
        "experience_years": 21,
        "city": "Gwalior"
    },
    {
        "name": "Dr. Madeline Reed",
        "speciality": "Gynecologist",
        "experience_years": 35,
        "city": "Kozhikode"
    },
    {
        "name": "Dr. Scott Franklin",
        "speciality": "Cardiologist",
        "experience_years": 23,
        "city": "New Delhi"
    },
    {
        "name": "Dr. Alan Allen",
        "speciality": "Anesthesiologist",
        "experience_years": 36,
        "city": "Kollam"
    },
    {
        "name": "Dr. Eric Cortez",
        "speciality": "General Surgeon",
        "experience_years": 12,
        "city": "Hubballi-Dharwad"
    },
    {
        "name": "Dr. Gail Baker",
        "speciality": "Gynecologist",
        "experience_years": 9,
        "city": "Jamshedpur"
    },
    {
        "name": "Dr. Tyler Robertson",
        "speciality": "Urologist",
        "experience_years": 33,
        "city": "Haridwar"
    },
    {
        "name": "Dr. Nancy Baker",
        "speciality": "Ophthalmologist",
        "experience_years": 29,
        "city": "Amritsar"
    },
    {
        "name": "Dr. Megan Soto",
        "speciality": "Psychiatrist",
        "experience_years": 17,
        "city": "Port Blair"
    },
    {
        "name": "Dr. Julia Downs",
        "speciality": "Ophthalmologist",
        "experience_years": 29,
        "city": "Thrissur"
    },
    {
        "name": "Dr. Ashley Olson",
        "speciality": "Ophthalmologist",
        "experience_years": 27,
        "city": "Madurai"
    },
    {
        "name": "Dr. Melissa Schwartz",
        "speciality": "Gynecologist",
        "experience_years": 12,
        "city": "Madurai"
    },
    {
        "name": "Dr. Sydney Foster",
        "speciality": "Dentist",
        "experience_years": 32,
        "city": "Coimbatore"
    },
    {
        "name": "Dr. Annette Villegas",
        "speciality": "Oncologist",
        "experience_years": 31,
        "city": "Belagavi"
    },
    {
        "name": "Dr. Kathy Chapman",
        "speciality": "General Surgeon",
        "experience_years": 3,
        "city": "Jodhpur"
    },
    {
        "name": "Dr. Logan Holland",
        "speciality": "Ophthalmologist",
        "experience_years": 40,
        "city": "Ahmedabad"
    },
    {
        "name": "Dr. Amanda Brooks",
        "speciality": "Ophthalmologist",
        "experience_years": 30,
        "city": "Indore"
    },
    {
        "name": "Dr. Wendy Allen",
        "speciality": "Urologist",
        "experience_years": 24,
        "city": "Dhanbad"
    },
    {
        "name": "Dr. Jeffery Bryant",
        "speciality": "Urologist",
        "experience_years": 26,
        "city": "Thane"
    },
    {
        "name": "Dr. Lauren Smith",
        "speciality": "Orthopedic Surgeon",
        "experience_years": 24,
        "city": "Ponda"
    },
    {
        "name": "Dr. Linda Payne",
        "speciality": "Nephrologist",
        "experience_years": 31,
        "city": "Surat"
    },
    {
        "name": "Dr. Megan Jones",
        "speciality": "Cardiologist",
        "experience_years": 35,
        "city": "Jabalpur"
    },
    {
        "name": "Dr. Zachary Mora",
        "speciality": "Cardiologist",
        "experience_years": 40,
        "city": "Thrissur"
    },
    {
        "name": "Dr. Matthew Diaz",
        "speciality": "Anesthesiologist",
        "experience_years": 12,
        "city": "Tirupati"
    },
    {
        "name": "Dr. Beth Jones",
        "speciality": "Dermatologist",
        "experience_years": 14,
        "city": "Tirupati"
    },
    {
        "name": "Dr. Robert Kelly",
        "speciality": "Ophthalmologist",
        "experience_years": 40,
        "city": "Salem"
    },
    {
        "name": "Dr. Anthony Woods",
        "speciality": "Oncologist",
        "experience_years": 24,
        "city": "Thrissur"
    },
    {
        "name": "Dr. Matthew Phillips",
        "speciality": "Oncologist",
        "experience_years": 6,
        "city": "Port Blair"
    },
    {
        "name": "Dr. Gina Patterson",
        "speciality": "Urologist",
        "experience_years": 23,
        "city": "Patiala"
    },
    {
        "name": "Dr. David Henson",
        "speciality": "Orthopedic Surgeon",
        "experience_years": 27,
        "city": "Mangaluru"
    },
    {
        "name": "Dr. Terry Castillo",
        "speciality": "Cardiologist",
        "experience_years": 31,
        "city": "Rajkot"
    },
    {
        "name": "Dr. Kristin Greene",
        "speciality": "ENT Specialist",
        "experience_years": 33,
        "city": "Jodhpur"
    },
    {
        "name": "Dr. Jonathan Davis",
        "speciality": "Dermatologist",
        "experience_years": 3,
        "city": "Amritsar"
    },
    {
        "name": "Dr. Olivia Hutchinson",
        "speciality": "Dentist",
        "experience_years": 9,
        "city": "Kolkata"
    },
    {
        "name": "Dr. Ronald Bates",
        "speciality": "Dentist",
        "experience_years": 28,
        "city": "Bokaro"
    },
    {
        "name": "Dr. Christopher Williams",
        "speciality": "Gynecologist",
        "experience_years": 32,
        "city": "Jabalpur"
    },
    {
        "name": "Dr. Mark Suarez",
        "speciality": "Psychiatrist",
        "experience_years": 14,
        "city": "Indore"
    },
    {
        "name": "Dr. Elizabeth Miller",
        "speciality": "Dentist",
        "experience_years": 26,
        "city": "Thane"
    },
    {
        "name": "Dr. Jonathan Chase",
        "speciality": "Dermatologist",
        "experience_years": 23,
        "city": "Ujjain"
    },
    {
        "name": "Dr. Tammy Butler",
        "speciality": "Gynecologist",
        "experience_years": 20,
        "city": "Ujjain"
    },
    {
        "name": "Dr. Derek Martinez",
        "speciality": "Dermatologist",
        "experience_years": 3,
        "city": "Dibrugarh"
    },
    {
        "name": "Dr. Cynthia Miller",
        "speciality": "ENT Specialist",
        "experience_years": 34,
        "city": "Mysuru"
    },
    {
        "name": "Dr. Kenneth Avila",
        "speciality": "Anesthesiologist",
        "experience_years": 35,
        "city": "Silchar"
    },
    {
        "name": "Dr. Amanda Thomas",
        "speciality": "ENT Specialist",
        "experience_years": 24,
        "city": "Ajmer"
    },
    {
        "name": "Dr. Lindsay Taylor",
        "speciality": "Cardiologist",
        "experience_years": 37,
        "city": "Tiruchirappalli"
    },
    {
        "name": "Dr. Alexandria Mccall",
        "speciality": "Neurologist",
        "experience_years": 8,
        "city": "Visakhapatnam"
    },
    {
        "name": "Dr. Kimberly Gomez",
        "speciality": "Neurologist",
        "experience_years": 9,
        "city": "Tezpur"
    },
    {
        "name": "Dr. Steven Coleman",
        "speciality": "Gynecologist",
        "experience_years": 22,
        "city": "Rajkot"
    },
    {
        "name": "Dr. Michael Smith",
        "speciality": "Cardiologist",
        "experience_years": 17,
        "city": "Rajkot"
    },
    {
        "name": "Dr. Shelly Neal",
        "speciality": "Urologist",
        "experience_years": 3,
        "city": "Puducherry"
    },
    {
        "name": "Dr. Benjamin Mitchell",
        "speciality": "Radiologist",
        "experience_years": 17,
        "city": "Bilaspur"
    },
    {
        "name": "Dr. Blake Castro",
        "speciality": "General Surgeon",
        "experience_years": 12,
        "city": "Margao"
    },
    {
        "name": "Dr. James Blanchard",
        "speciality": "Radiologist",
        "experience_years": 1,
        "city": "Karaikal"
    },
    {
        "name": "Dr. Victoria Dunlap",
        "speciality": "Dentist",
        "experience_years": 11,
        "city": "Bokaro"
    },
    {
        "name": "Dr. George Sloan",
        "speciality": "Oncologist",
        "experience_years": 31,
        "city": "Ponda"
    },
    {
        "name": "Dr. Hannah Love",
        "speciality": "Nephrologist",
        "experience_years": 13,
        "city": "Mumbai"
    },
    {
        "name": "Dr. Ryan James",
        "speciality": "Dermatologist",
        "experience_years": 4,
        "city": "Chandigarh"
    },
    {
        "name": "Dr. Matthew Day",
        "speciality": "Nephrologist",
        "experience_years": 10,
        "city": "Udaipur"
    },
    {
        "name": "Dr. Frederick Williams",
        "speciality": "Ophthalmologist",
        "experience_years": 21,
        "city": "Bhavnagar"
    },
    {
        "name": "Dr. Ashley Booker",
        "speciality": "ENT Specialist",
        "experience_years": 13,
        "city": "Shimla"
    },
    {
        "name": "Dr. Michele Harris",
        "speciality": "Oncologist",
        "experience_years": 10,
        "city": "Dibrugarh"
    },
    {
        "name": "Dr. Joanna Reed",
        "speciality": "Neurologist",
        "experience_years": 34,
        "city": "Dhanbad"
    },
    {
        "name": "Dr. Linda Hamilton",
        "speciality": "Radiologist",
        "experience_years": 29,
        "city": "Thrissur"
    },
    {
        "name": "Dr. Jenna Marshall",
        "speciality": "Oncologist",
        "experience_years": 33,
        "city": "Jalandhar"
    },
    {
        "name": "Dr. Christina Moore",
        "speciality": "Dermatologist",
        "experience_years": 13,
        "city": "Cuttack"
    },
    {
        "name": "Dr. Kevin Gardner",
        "speciality": "Anesthesiologist",
        "experience_years": 13,
        "city": "Udaipur"
    },
    {
        "name": "Dr. Morgan Kim",
        "speciality": "Orthopedic Surgeon",
        "experience_years": 40,
        "city": "Pune"
    },
    {
        "name": "Dr. Christopher Garner",
        "speciality": "Orthopedic Surgeon",
        "experience_years": 19,
        "city": "Mysuru"
    },
    {
        "name": "Dr. Chad Clements",
        "speciality": "Radiologist",
        "experience_years": 10,
        "city": "Lucknow"
    },
    {
        "name": "Dr. Terry Dunn",
        "speciality": "ENT Specialist",
        "experience_years": 30,
        "city": "Ambala"
    },
    {
        "name": "Dr. James Reid",
        "speciality": "Gynecologist",
        "experience_years": 5,
        "city": "Dhanbad"
    },
    {
        "name": "Dr. Jo Hays",
        "speciality": "Ophthalmologist",
        "experience_years": 21,
        "city": "Ahmedabad"
    },
    {
        "name": "Dr. Christopher Cohen",
        "speciality": "Urologist",
        "experience_years": 19,
        "city": "Vasco da Gama"
    },
    {
        "name": "Dr. Kelsey Saunders",
        "speciality": "General Surgeon",
        "experience_years": 23,
        "city": "Rajnandgaon"
    },
    {
        "name": "Dr. Kelly Greer",
        "speciality": "General Surgeon",
        "experience_years": 17,
        "city": "Durgapur"
    },
    {
        "name": "Dr. James Quinn",
        "speciality": "Dentist",
        "experience_years": 33,
        "city": "Mapusa"
    },
    {
        "name": "Dr. Sheila Matthews",
        "speciality": "Orthopedic Surgeon",
        "experience_years": 20,
        "city": "Tiruchirappalli"
    },
    {
        "name": "Dr. Heather Richardson",
        "speciality": "General Surgeon",
        "experience_years": 5,
        "city": "Panaji"
    },
    {
        "name": "Dr. Ryan Brandt",
        "speciality": "Dermatologist",
        "experience_years": 22,
        "city": "Haldwani"
    },
    {
        "name": "Dr. Martin Fletcher",
        "speciality": "Dentist",
        "experience_years": 12,
        "city": "Dhanbad"
    },
    {
        "name": "Dr. Steven Torres",
        "speciality": "Gynecologist",
        "experience_years": 10,
        "city": "Bokaro"
    },
    {
        "name": "Dr. Amy Garza",
        "speciality": "Pediatrician",
        "experience_years": 9,
        "city": "Ponda"
    },
    {
        "name": "Dr. Richard Harris",
        "speciality": "Radiologist",
        "experience_years": 25,
        "city": "Nizamabad"
    },
    {
        "name": "Dr. Susan Fuentes",
        "speciality": "Cardiologist",
        "experience_years": 18,
        "city": "Chennai"
    },
    {
        "name": "Dr. Kelsey Reese",
        "speciality": "ENT Specialist",
        "experience_years": 12,
        "city": "Nashik"
    },
    {
        "name": "Dr. Mark Johnson",
        "speciality": "Urologist",
        "experience_years": 33,
        "city": "Patna"
    },
    {
        "name": "Dr. Angela Taylor",
        "speciality": "Pediatrician",
        "experience_years": 39,
        "city": "Kanpur"
    },
    {
        "name": "Dr. Elizabeth Sanders",
        "speciality": "Anesthesiologist",
        "experience_years": 33,
        "city": "Howrah"
    },
    {
        "name": "Dr. Jillian Ramirez",
        "speciality": "General Surgeon",
        "experience_years": 4,
        "city": "Durg-Bhilai"
    },
    {
        "name": "Dr. Joseph Contreras",
        "speciality": "Psychiatrist",
        "experience_years": 18,
        "city": "Guwahati"
    },
    {
        "name": "Dr. Christopher Thompson",
        "speciality": "Orthopedic Surgeon",
        "experience_years": 37,
        "city": "Agra"
    },
    {
        "name": "Dr. Troy Allen",
        "speciality": "Oncologist",
        "experience_years": 6,
        "city": "Meerut"
    },
    {
        "name": "Dr. Noah Wu",
        "speciality": "ENT Specialist",
        "experience_years": 2,
        "city": "Rajkot"
    },
    {
        "name": "Dr. Shawn White",
        "speciality": "Neurologist",
        "experience_years": 9,
        "city": "Bhavnagar"
    },
    {
        "name": "Dr. Michael Cortez",
        "speciality": "Orthopedic Surgeon",
        "experience_years": 34,
        "city": "Panaji"
    },
    {
        "name": "Dr. Angela Roberts",
        "speciality": "Neurologist",
        "experience_years": 38,
        "city": "Varanasi"
    },
    {
        "name": "Dr. Veronica Walters",
        "speciality": "ENT Specialist",
        "experience_years": 35,
        "city": "Vijayawada"
    },
    {
        "name": "Dr. Jennifer Banks",
        "speciality": "Nephrologist",
        "experience_years": 34,
        "city": "Thane"
    },
    {
        "name": "Dr. Thomas George",
        "speciality": "Gynecologist",
        "experience_years": 37,
        "city": "Gaya"
    },
    {
        "name": "Dr. Adam Adams",
        "speciality": "Gynecologist",
        "experience_years": 32,
        "city": "Surat"
    },
    {
        "name": "Dr. Angela Weber",
        "speciality": "Dentist",
        "experience_years": 32,
        "city": "Mapusa"
    },
    {
        "name": "Dr. Amanda Sanders",
        "speciality": "ENT Specialist",
        "experience_years": 22,
        "city": "Jorhat"
    },
    {
        "name": "Dr. Walter Lane",
        "speciality": "Cardiologist",
        "experience_years": 24,
        "city": "Muzaffarpur"
    },
    {
        "name": "Dr. Joel Hawkins",
        "speciality": "Anesthesiologist",
        "experience_years": 33,
        "city": "Solan"
    },
    {
        "name": "Dr. Chad Lopez",
        "speciality": "Anesthesiologist",
        "experience_years": 17,
        "city": "Kullu"
    },
    {
        "name": "Dr. Christine Blake",
        "speciality": "Radiologist",
        "experience_years": 2,
        "city": "Kochi"
    },
    {
        "name": "Dr. Ashley Stevens",
        "speciality": "Orthopedic Surgeon",
        "experience_years": 2,
        "city": "Rourkela"
    },
    {
        "name": "Dr. James Green",
        "speciality": "Neurologist",
        "experience_years": 5,
        "city": "Lucknow"
    },
    {
        "name": "Dr. Mark Lopez",
        "speciality": "Cardiologist",
        "experience_years": 14,
        "city": "Belagavi"
    },
    {
        "name": "Dr. Kevin Reynolds",
        "speciality": "General Surgeon",
        "experience_years": 16,
        "city": "Bathinda"
    },
    {
        "name": "Dr. Megan Douglas",
        "speciality": "Orthopedic Surgeon",
        "experience_years": 19,
        "city": "Tirupati"
    },
    {
        "name": "Dr. Melissa Clarke",
        "speciality": "Dermatologist",
        "experience_years": 5,
        "city": "Tirupati"
    },
    {
        "name": "Dr. Travis Turner",
        "speciality": "ENT Specialist",
        "experience_years": 20,
        "city": "Rajnandgaon"
    },
    {
        "name": "Dr. Justin Bates",
        "speciality": "Dermatologist",
        "experience_years": 15,
        "city": "Asansol"
    },
    {
        "name": "Dr. Tanya Ray",
        "speciality": "General Surgeon",
        "experience_years": 40,
        "city": "Chennai"
    },
    {
        "name": "Dr. Kathleen Martin",
        "speciality": "Anesthesiologist",
        "experience_years": 21,
        "city": "Dharamshala"
    },
    {
        "name": "Dr. Eric Gonzales",
        "speciality": "Gynecologist",
        "experience_years": 28,
        "city": "Kota"
    },
    {
        "name": "Dr. Jillian Holland",
        "speciality": "Orthopedic Surgeon",
        "experience_years": 12,
        "city": "Darbhanga"
    },
    {
        "name": "Dr. Patricia Carlson",
        "speciality": "Oncologist",
        "experience_years": 19,
        "city": "Thrissur"
    },
    {
        "name": "Dr. Sheila Pierce",
        "speciality": "Pediatrician",
        "experience_years": 38,
        "city": "Durg-Bhilai"
    },
    {
        "name": "Dr. Calvin Johnson",
        "speciality": "Radiologist",
        "experience_years": 30,
        "city": "Bhagalpur"
    },
    {
        "name": "Dr. Rodney Allen",
        "speciality": "Dentist",
        "experience_years": 16,
        "city": "Haldwani"
    },
    {
        "name": "Dr. Cynthia Arroyo",
        "speciality": "Pediatrician",
        "experience_years": 37,
        "city": "Amritsar"
    },
    {
        "name": "Dr. Leah Jones",
        "speciality": "Ophthalmologist",
        "experience_years": 25,
        "city": "Vasco da Gama"
    },
    {
        "name": "Dr. Kathryn Terry",
        "speciality": "Dentist",
        "experience_years": 17,
        "city": "Haridwar"
    },
    {
        "name": "Dr. Susan Meadows",
        "speciality": "Ophthalmologist",
        "experience_years": 28,
        "city": "Nellore"
    },
    {
        "name": "Dr. Ashley Woods",
        "speciality": "Cardiologist",
        "experience_years": 7,
        "city": "Darbhanga"
    },
    {
        "name": "Dr. Timothy Turner",
        "speciality": "Orthopedic Surgeon",
        "experience_years": 4,
        "city": "Jamshedpur"
    },
    {
        "name": "Dr. Michael Suarez",
        "speciality": "Urologist",
        "experience_years": 13,
        "city": "Dharamshala"
    },
    {
        "name": "Dr. Paul Robinson",
        "speciality": "Anesthesiologist",
        "experience_years": 12,
        "city": "Amritsar"
    },
    {
        "name": "Dr. Jennifer Williams",
        "speciality": "Dentist",
        "experience_years": 19,
        "city": "Ujjain"
    },
    {
        "name": "Dr. Anna Gray",
        "speciality": "Nephrologist",
        "experience_years": 1,
        "city": "Gaya"
    },
    {
        "name": "Dr. Christopher Schroeder",
        "speciality": "Nephrologist",
        "experience_years": 37,
        "city": "Shimla"
    },
    {
        "name": "Dr. Justin Chase",
        "speciality": "Dentist",
        "experience_years": 28,
        "city": "Dibrugarh"
    },
    {
        "name": "Dr. Amanda Shelton",
        "speciality": "Urologist",
        "experience_years": 27,
        "city": "Mysuru"
    },
    {
        "name": "Dr. Michael Welch",
        "speciality": "Dentist",
        "experience_years": 8,
        "city": "Ludhiana"
    },
    {
        "name": "Dr. Aaron Villarreal",
        "speciality": "Nephrologist",
        "experience_years": 39,
        "city": "Siliguri"
    },
    {
        "name": "Dr. Amy Carlson",
        "speciality": "Cardiologist",
        "experience_years": 34,
        "city": "Haldwani"
    },
    {
        "name": "Dr. Amber Mccullough",
        "speciality": "Urologist",
        "experience_years": 10,
        "city": "Kochi"
    },
    {
        "name": "Dr. Victoria Gomez",
        "speciality": "Gynecologist",
        "experience_years": 32,
        "city": "Muzaffarpur"
    },
    {
        "name": "Dr. Lisa Grant",
        "speciality": "Oncologist",
        "experience_years": 24,
        "city": "Jabalpur"
    },
    {
        "name": "Dr. Ronnie Reynolds",
        "speciality": "Gynecologist",
        "experience_years": 39,
        "city": "Ambala"
    },
    {
        "name": "Dr. Ann Taylor DVM",
        "speciality": "General Surgeon",
        "experience_years": 13,
        "city": "Gurgaon"
    },
    {
        "name": "Dr. Tiffany Paul",
        "speciality": "Gynecologist",
        "experience_years": 34,
        "city": "Belagavi"
    },
    {
        "name": "Dr. Mr. Keith Brooks",
        "speciality": "Pediatrician",
        "experience_years": 38,
        "city": "Nizamabad"
    },
    {
        "name": "Dr. Douglas Martinez",
        "speciality": "Gynecologist",
        "experience_years": 4,
        "city": "Patiala"
    },
    {
        "name": "Dr. Bryan Herrera",
        "speciality": "Cardiologist",
        "experience_years": 26,
        "city": "Bhavnagar"
    },
    {
        "name": "Dr. Michael Hall",
        "speciality": "Nephrologist",
        "experience_years": 31,
        "city": "Darbhanga"
    },
    {
        "name": "Dr. Jerry Thompson",
        "speciality": "Radiologist",
        "experience_years": 29,
        "city": "Meerut"
    },
    {
        "name": "Dr. Christian Myers",
        "speciality": "Gynecologist",
        "experience_years": 37,
        "city": "Chennai"
    },
    {
        "name": "Dr. Christina Moore",
        "speciality": "Oncologist",
        "experience_years": 28,
        "city": "Khammam"
    },
    {
        "name": "Dr. Amanda Bennett",
        "speciality": "Oncologist",
        "experience_years": 16,
        "city": "Faridabad"
    },
    {
        "name": "Dr. Ryan Thompson",
        "speciality": "Nephrologist",
        "experience_years": 29,
        "city": "Lucknow"
    },
    {
        "name": "Dr. Kimberly Thompson",
        "speciality": "Cardiologist",
        "experience_years": 1,
        "city": "Silvassa"
    },
    {
        "name": "Dr. Jason Kim",
        "speciality": "ENT Specialist",
        "experience_years": 24,
        "city": "Margao"
    },
    {
        "name": "Dr. James Higgins",
        "speciality": "Orthopedic Surgeon",
        "experience_years": 10,
        "city": "Hyderabad"
    },
    {
        "name": "Dr. Erin Gonzalez",
        "speciality": "Nephrologist",
        "experience_years": 25,
        "city": "Dharamshala"
    },
    {
        "name": "Dr. Andre Williams",
        "speciality": "Ophthalmologist",
        "experience_years": 5,
        "city": "Nizamabad"
    },
    {
        "name": "Dr. Corey Padilla",
        "speciality": "General Surgeon",
        "experience_years": 25,
        "city": "Ranchi"
    },
    {
        "name": "Dr. Samuel Goodwin",
        "speciality": "Nephrologist",
        "experience_years": 27,
        "city": "Kozhikode"
    },
    {
        "name": "Dr. David Young",
        "speciality": "Radiologist",
        "experience_years": 1,
        "city": "Puducherry"
    },
    {
        "name": "Dr. Daniel Johnson DDS",
        "speciality": "Orthopedic Surgeon",
        "experience_years": 23,
        "city": "Ludhiana"
    },
    {
        "name": "Dr. Yvonne Melendez",
        "speciality": "Orthopedic Surgeon",
        "experience_years": 1,
        "city": "Faridabad"
    },
    {
        "name": "Dr. Judy Hughes",
        "speciality": "Cardiologist",
        "experience_years": 17,
        "city": "Salem"
    },
    {
        "name": "Dr. Kristen Frye",
        "speciality": "Psychiatrist",
        "experience_years": 1,
        "city": "Cuttack"
    },
    {
        "name": "Dr. Diamond Torres",
        "speciality": "Neurologist",
        "experience_years": 6,
        "city": "Gwalior"
    },
    {
        "name": "Dr. Daniel Hoffman",
        "speciality": "Ophthalmologist",
        "experience_years": 18,
        "city": "Roorkee"
    },
    {
        "name": "Dr. Courtney Whitaker",
        "speciality": "Neurologist",
        "experience_years": 30,
        "city": "Old Delhi"
    },
    {
        "name": "Dr. Bruce Boyd",
        "speciality": "Gynecologist",
        "experience_years": 27,
        "city": "Kollam"
    },
    {
        "name": "Dr. Ashley Jones",
        "speciality": "Psychiatrist",
        "experience_years": 36,
        "city": "Karnal"
    },
    {
        "name": "Dr. Elizabeth Saunders",
        "speciality": "Dermatologist",
        "experience_years": 28,
        "city": "Lucknow"
    },
    {
        "name": "Dr. Richard Reeves",
        "speciality": "Cardiologist",
        "experience_years": 4,
        "city": "Indore"
    },
    {
        "name": "Dr. Eric Hall Jr.",
        "speciality": "Urologist",
        "experience_years": 40,
        "city": "Warangal"
    },
    {
        "name": "Dr. Jennifer Peters",
        "speciality": "Nephrologist",
        "experience_years": 9,
        "city": "New Delhi"
    },
    {
        "name": "Dr. Nicole Mccormick",
        "speciality": "Pediatrician",
        "experience_years": 9,
        "city": "Hazaribagh"
    },
    {
        "name": "Dr. Caroline Chaney",
        "speciality": "Nephrologist",
        "experience_years": 21,
        "city": "Durgapur"
    },
    {
        "name": "Dr. Stephanie Washington",
        "speciality": "ENT Specialist",
        "experience_years": 33,
        "city": "Siliguri"
    },
    {
        "name": "Dr. Sally Hoffman",
        "speciality": "Cardiologist",
        "experience_years": 7,
        "city": "Thane"
    },
    {
        "name": "Dr. Paul Jenkins",
        "speciality": "Cardiologist",
        "experience_years": 12,
        "city": "Korba"
    },
    {
        "name": "Dr. Joseph Conley",
        "speciality": "Oncologist",
        "experience_years": 2,
        "city": "Kozhikode"
    },
    {
        "name": "Dr. Nicole Barr",
        "speciality": "Neurologist",
        "experience_years": 28,
        "city": "Karnal"
    },
    {
        "name": "Dr. David Terry",
        "speciality": "Dentist",
        "experience_years": 4,
        "city": "Daman"
    },
    {
        "name": "Dr. Alyssa Gilmore",
        "speciality": "Urologist",
        "experience_years": 17,
        "city": "Bhubaneswar"
    },
    {
        "name": "Dr. Mrs. Ashley Barnes",
        "speciality": "Orthopedic Surgeon",
        "experience_years": 40,
        "city": "Gwalior"
    }
]
export const load: PageServerLoad = async ({ url }) => {
    const city = url.searchParams.get('city')?.toLowerCase() || null;
    const speciality = url.searchParams.get('speciality')?.toLowerCase() || null;

    async function fetchDataFromSource(city: string | null, speciality: string | null) {
        try {
            const answer = data.filter(item => {
                return (city === null || item.city.toLowerCase() === city) &&
                       (speciality === null || item.speciality.toLowerCase() === speciality);
            });
            return answer;
        } catch (err) {
            console.error(err);
            throw error(500, 'Error fetching data');
        }
    }

    try {
        const articles = await fetchDataFromSource(city, speciality);
        return {
            articles:articles
        };
    } catch (err) {
        console.error(err);
        throw error(500, "Could not fetch articles");
    }
};