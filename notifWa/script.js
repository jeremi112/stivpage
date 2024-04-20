// const Telephone = document.getElementById('Telephone');
// const btn = document.getElementById('btn')
// const output = document.getElementById('output')


// // API endpoint for creating a new user
// const apiUrl = 'https://graph.facebook.com/v19.0/302711589589126/messages';
// // Form data to be sent in the request body



    


// const press=()=>{
//     const formData  = {
//         "messaging_product": "whatsapp",
//         "recipient_type": "individual",
//         "to":  toString(Telephone.value),
//         "type": "template",
//         "template": {
//           "name": "test2",
//           "language": {
//             "code": "ID"
//           },
//           "components": [
//             {
//               "type": "header",
//               "parameters": [
//                 {
//                   "type": "image",
//                   "image": {
//                     "link": "https://en.ac-illust.com/blog/wp-content/uploads/2022/09/New-file-5-1024x576.jpeg"
//                   }
//                 }
//               ]
//             }
//           ]
//         }
//       }



// output.innerHTML=Telephone.value
// console.log(Telephone.value)
// console.log(JSON.stringify(formData))
// fetch (apiUrl,{
//     method: 'POST',
//     headers:{
//         'Content-Type': 'application/json',
//         'Authorization':'Bearer EAAGUXSfWcNwBO4ApNY6ZAxV7YuGw7wlmjCwk8kdV7KOplsnkZCVHbEQRuA8ci7VIMoTN9t2Fnkj6fhggOO5Cvf7gxZB7OlgSyoTvnQZBYbbya3AJuyt14JAcsVDvWPBgti145hN1ffD825XjsQiBhJv9iJEmj6B7Pqk4b4NRxmAQZAU1G6lPfRF3vCbkc0r0G4mOotKpBYZASJ8Y7m7RoZD'
//     },
//     body:JSON.stringify(formData),
// }).then(response => {
//   console.log(response.json())
// })
//   .catch(error => {
//     console.error('Error:', error);
//   });
// }
// const Click =()=>{
// press()
// }

const Telephone = document.getElementById('Telephone');
const btn = document.getElementById('btn');
const output = document.getElementById('output');

// API endpoint for creating a new user
const apiUrl = 'https://graph.facebook.com/v19.0/302711589589126/messages';

const press = () => {
    const formData = {
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": Telephone.value,
        "type": "template",
        "template": {
            "name": "test2",
            "language": {
                "code": "ID"
            },
            "components": [
                {
                    "type": "header",
                    "parameters": [
                        {
                            "type": "image",
                            "image": {
                                "link": "https://en.ac-illust.com/blog/wp-content/uploads/2022/09/New-file-5-1024x576.jpeg"
                            }
                        }
                    ]
                }
            ]
        }
    };

    // Set output value to Telephone.value
    output.innerHTML = Telephone.value;

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer EAAGUXSfWcNwBO4ApNY6ZAxV7YuGw7wlmjCwk8kdV7KOplsnkZCVHbEQRuA8ci7VIMoTN9t2Fnkj6fhggOO5Cvf7gxZB7OlgSyoTvnQZBYbbya3AJuyt14JAcsVDvWPBgti145hN1ffD825XjsQiBhJv9iJEmj6B7Pqk4b4NRxmAQZAU1G6lPfRF3vCbkc0r0G4mOotKpBYZASJ8Y7m7RoZD'
        },
        body: JSON.stringify(formData),
    }).then(response => {
        console.log(response.json());
    }).catch(error => {
        console.error('Error:', error);
    });
}

const Click = () => {
    press();
}
