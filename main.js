// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
( function(){
  // Select the first element from the array
  let first = formData[ 0 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.label );
} )();


// -------- Your Code Goes Below this Line --------
let fields = document.getElementById('fields')

formData.forEach(function(formData){
  let data = formData
  console.log(`creating HTML for ${formData.label}`)

  if (formData.type === 'textarea'){
    let textarea = document.createElement('textarea')

    textarea.placeholder = formData.label
    textarea.id = formData.id

    fields.appendChild(textarea)

  } else if (formData.type === 'select'){
    let select = document.createElement('select')

    select.id = formData.id

    let placeholder = document.createElement('option')

    placeholder.value = 0
    placeholder.innerHTML = formData.label

    select.appendChild(placeholder)

    for (var j = 0; j < formData.options.length; j++) {
      let opt = formData.options[j]
      let option = document.createElement('option')

      option.value = opt.value
      option.textContent = opt.label

      select.appendChild(option)
    }

    fields.appendChild(select)

  } else {
    let element = document.createElement('input')

    element.type = formData.type
    element.placeholder = formData.label
    element.id = formData.id

    fields.appendChild(element)
  }

})
