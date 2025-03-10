import { createContext, useContext, useState } from "react";
import { APIcontext } from "./APIContext";

const appContex = createContext();
const AppContexProvider =({children})=>{



  const{createUser, loginUser, currentUserInfo, postReview, postRating, editRating, editAReview} = useContext(APIcontext)


    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [page, setPage] = useState('/')
    const storedValue = localStorage.getItem('cart-clicked')
    const [clickedCart, setclickedCart] = useState(storedValue === 'true' || false)
  


    // login form authen
    const checkFormat = ((input, regex) => {
        return regex.test(input)
      })

    const [loginInputValues, setLoginInputValues] = useState({
        email: '',
        password: ''
      })
    
      const handleloginInputValues = (e) => {
        const { name, value } = e.target
        setLoginInputValues((prevState) => ({
          ...prevState,
          [name]: value
        }))
      }
    
      // handle validation
      const loginErrorObj = {}

      const [loginError, setLoginError] = useState({
        loginEmail: '',
        loginPassword: ''
        
      })

      const handleEmailError = ()=>{
        const emailRegex = /\S+@\S+\.\S+/;   
       if (!checkFormat(loginInputValues.email, emailRegex)) {
        loginErrorObj.loginEmail = 'Invalid Email format'
       
      }
      setLoginError(loginErrorObj)
  
      return Object.keys(loginErrorObj).length === 0;
      }      


      const handleLoginError = () => {         
        if (loginInputValues.password.trim().length < 1) { 
            loginErrorObj.loginPassword = 'Your password Cannot be empty'
        }      

        setLoginError(loginErrorObj)
  

        return Object.keys(loginErrorObj).length === 0;
    
      }

      const handleEmailSubmit = (e) => {
        e.preventDefault()
            console.log(loginError)
        return handleEmailError()
    
      }


      const handleLoginSubmit = (e) => {
        e.preventDefault()
        if (handleLoginError()) {         
           loginUser(loginInputValues)
        }
      }

    //

    // handle reg inputs

    const [inputValues, setInputValues] = useState({
        email: '',
        password: '',
        repeat_password: '',
        first_name: '',
        last_name: '',
        phone: ''     
      })
    
      const handleInputs = (e) => {
        const { name, value } = e.target
        setInputValues((prevState) => ({
          ...prevState,
          [name]: value
        }))
      }
    
      // handle validation
    
      const [error, setError] = useState({
        email: '',
        password: '',
        repeat_password: '',
        first_name: '',
        last_name: '',
        phone: '',
        postError: ''    
      })
    
      
    
      const errorObj = {}
    
      const handleError = () => {
        const emailRegex = /\S+@\S+\.\S+/;
        const passwordRegex = /^(?=.*\d)[A-Za-z\d]{6,}$/;
        const phoneNumberRegex = /^\d{11}$/;
    
        if (!checkFormat(inputValues.email, emailRegex)) {
          errorObj.email = 'Invalid Email format'
        }
        if (!checkFormat(inputValues.password, passwordRegex)) {
          errorObj.password = 'Enter at least 6 characters'
        }
        if ((inputValues.password !== inputValues.repeat_password)) {
          errorObj.repeat_password = 'Passwords must match'
        }
    
        if (inputValues.first_name.trim().length < 1) {
          errorObj.first_name = 'Enter at least one character first name'
        }
        if (inputValues.last_name.trim().length < 1) {
          errorObj.last_name = 'Enter at least one character last name'
        }
        if (!checkFormat(inputValues.phone, phoneNumberRegex)) {
          errorObj.phone = 'Enter a valid phone number (11 Digits)'
        }

           
        setError(errorObj)
        return Object.keys(errorObj).length === 0;
    
      }

      
     

      const handleSubmit = (e) => {
        e.preventDefault()
        if (handleError()) {
          console.log(inputValues) // make api call here ?? remember to delete repeat password
          createUser(inputValues)
        }
    
      }

    

    const showPopper = () =>{
      document.getElementById('popperSignin').classList.remove('invisible')
      document.getElementById('popperbg').classList.remove('invisible')
      
    }
    const hidePopper = (e) =>{        
        document.getElementById('popperSignin').classList.add('invisible')
        document.getElementById('popperbg').classList.add('invisible')
    // }
     
     
    }

    //scroll to top function
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', 
      });
    };


    // show cart
    const showSideCart = () =>{
      setclickedCart(true)
      localStorage.setItem('cart-clicked', true)
    }

    const removeSideCart = ()=>{
      setclickedCart(false)
      localStorage.setItem('cart-clicked', false)
    }


    // reviews and rating
    const [selectedRating, setSelectedRating] = useState(0); 
    const ratedVal = (index) => {
     setSelectedRating(index + 1);  
 };

const [reviewInput, setReviewInput] = useState({
  writereview: ''
})

const handleReviewInput =(e)=>{
  setReviewInput({...reviewInput, writereview: e.target.value})
}

const [reviewError, setReviewError] = useState({
  writeReview: '',
  rating: ''
})

const reviewErrorObj = {}

const handleReviewError = ()=>{
  if(reviewInput.writereview.trim().length < 2){
    reviewErrorObj.writeReview = 'Please enter a valid review'
  }
  if(selectedRating ===0){
    reviewErrorObj.rating = 'Please provide a rating'
  }

  setReviewError(reviewErrorObj)
  return Object.keys(reviewErrorObj).length === 0
}

const ratingValue = {5:'Excellent', 4:'Very Good', 3: 'Good', 2: 'Fair', 1: 'Poor'}

const [productRated, setProductRated] = useState(false)

const [editReview, setEditReview] = useState(false)

const handleReviewandRating = (id, review_id)=>{
  
  if(handleReviewError()){
    const review = {
      user_id: currentUserInfo.id,
      text: reviewInput.writereview,
      product_id: id
    }
    const rating = {
      user_id: currentUserInfo.id,
      product_id: id,
      text: ratingValue[selectedRating],
      value: selectedRating
    }
    if(editReview){
      editRating(rating)
      const editedRewview = {
        user_id: currentUserInfo.id,
        text: reviewInput.writereview,
      }
        // edit review
        editAReview(review_id, editedRewview)
      setEditReview(false)

    }else{
      postReview(review)         
      postRating(rating)
  
    }
   
   
    setReviewInput({
      writereview: ''
    })
    setProductRated(true)
  }
 
}



    const values = {
        currentYear,
        page,
        setPage, 
        inputValues,
        handleInputs,
        error,
        handleSubmit,
        setInputValues,


        loginInputValues,
        handleloginInputValues,
        handleLoginError,
        setLoginInputValues,

        handleSubmit,
        handleEmailError,
        handleLoginSubmit,
        handleEmailSubmit,
        loginErrorObj,
        loginError,
        showPopper,
        hidePopper,
        scrollToTop,
        clickedCart,
        showSideCart,
        removeSideCart,
        setclickedCart,

        ratedVal,
        selectedRating,

        reviewError,
        reviewInput,
        handleReviewandRating,
        handleReviewInput,
        setSelectedRating,

        setProductRated,
        productRated,
        setEditReview,
        editReview,
        setReviewInput


    }
    return(
        <appContex.Provider value={values}>
        {children}
    </appContex.Provider>
    )   
}

export {appContex, AppContexProvider}