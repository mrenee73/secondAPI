const baseURL = 'https://calendarific.com/api/v2/holidays';
const key = '0bc174935a4be44a250c61f91b456e354795dfcc';
const submitBtn = document.querySelector('.submit');
const specialDays = document.querySelector('ul');
const month = document.querySelector('.month-select');
submitBtn.addEventListener('click', fetchResults);


let url;

function fetchResults(){
    // e.preventDefault();
    console.log(month.value);
    console.log('function hit');
    url = `${baseURL}?api_key=${key}&country=$US&year=$2021&month=${month.value}&type=national`;
    console.log(url);
    
    fetch(url)     
        .then(results => {      
            return results.json()
        })            
        .then(json => {   
            console.log(json);         
            displayHolidays(json.response.holidays)
        })        
        // .catch(err => console.log(err))
}
        
function displayHolidays(calendar) {

    console.log('Api results:', calendar);
    while (specialDays.firstChild) {
        specialDays.removeChild(specialDays.firstChild);
    }
    calendar.forEach(m => {
              
        console.log(m);

        let holidays1 = document.createElement('li')        
        let holidays2 = document.createElement('li')
           
        
    
        specialDays.appendChild(holidays1)           
        specialDays.appendChild(holidays2)     
                          
        holidays1.innerText= m.name
        holidays2.innerText= m.description   

    

    })}

   