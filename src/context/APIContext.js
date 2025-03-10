import axios from "axios";
import { createContext, useState } from "react";
export const APIcontext = createContext()
export const APIProvider = ({children})=>{

let storedUsers = JSON.parse(localStorage.getItem('AllUsers')) || []
   
const baseURL = process.env.REACT_APP_BASE_URL;
const [merchantId, setMerchantId] = useState(() => {
    try {
      const storedMerchantInfo = localStorage.getItem('merchantInfo');

      if (storedMerchantInfo) {
        const merchantInfo = JSON.parse(storedMerchantInfo);
        return merchantInfo.id || process.env.REACT_APP_MERCHANT_ID; 
      }
    } catch (error) {
      console.error("Failed to parse merchantInfo from localStorage:", error);
    }
  
    return process.env.REACT_APP_MERCHANT_ID;
  });

// get all products from merchant
const [allProducts, setAllProducts] = useState([])
const [productsLoader, setProductsLoader] = useState(true)

const getAllProducts = async () => {
    try {
        const response = await axios.get(`${baseURL}/products?merchant_id=${merchantId}`)
        setAllProducts(response.data.data)
        setProductsLoader(false)           
        
    } catch (error) {
        console.log('Error says: ', error)
    }
}


// get all categories from merchant
const [allCategories, setCategories] = useState([])
const getAllCategories = async()=>{
    try {
        const response = await axios.get(`${baseURL}/categories?merchant_id=${merchantId}`)
        setCategories(response.data)
    } catch (error) {
        console.log('Error says: ', error)
    }
}


// states for register users
const [successRegister, setSuccessfulRegister] = useState(false)
const [failedRegisterMsg, setFailedRegisterMsg] = useState('')
const [registerMsg, setRegisterMsg] = useState('')
const [registerLoader, setRegisterLoader] = useState(false)

// create a new user
const createUser = async (data)=>{
    setRegisterLoader(true)
    try {
        const response = await axios.post(`${baseURL}/users`, data)
        if(response.data.msg){
            setFailedRegisterMsg(response.data.msg)
        }
        else{
            setRegisterMsg('User Created Successfully')
            setSuccessfulRegister(true)           
        }
        setRegisterLoader(false)
    } catch (error) {
        console.log('Error says: ', error)
    }
}

// states for login users
const [successfullLogin, setSuccessfulLogin] = useState(false)
const [failedLoginMsg, setFailedLoginMsg] = useState('')
const [currentUserInfo, setCurrenUserInfo] = useState(JSON.parse(localStorage.getItem('CurrentUserInfo')) || null)

const [loginMsg, setLoginMsg] = useState('')
const [loginLoader, setLoginLoader] = useState(false)

// login a user
const loginUser = async (data)=>{
    setLoginLoader(true)
    try {
        const response = await axios.post(`${baseURL}/users/login`, data)
        if(response.data.msg){
            setFailedLoginMsg(response.data.msg)
        }
        else{
            setLoginMsg('Logged in Successfully')
           localStorage.setItem('CurrentUserInfo', JSON.stringify(response.data))
          
           if (!storedUsers.includes(response.data.id)) {
            let updatedUsers = [...storedUsers, response.data.id];  
            localStorage.setItem('AllUsers', JSON.stringify(updatedUsers)); 
        }
           
           setCurrenUserInfo(response.data)
            setSuccessfulLogin(true)
            
        }
        setLoginLoader(false)
    } catch (error) {
        console.log('Error says: ', error)
    }
}



// post a review
const [reviewMsg, setReviewMsg] = useState('')
const postReview = async(data)=>{
    try {
        const response = await axios.post(`${baseURL}/reviews`, data)
        if(response.data.msg){
            setReviewMsg(response.data.msg)
        }else{
            setReviewMsg('Review posted successfully')
            console.log(response.data)
        }

        setTimeout(() => {
            setReviewMsg('')
        }, 2000);
    } catch (error) {
        console.log('Error says: ', error)
    }
}

// post a rating
const [ratingMsg, setRatingMsg] = useState('')
const postRating = async(data)=>{
    try {
        const response = await axios.post(`${baseURL}/ratings`, data)
        if(response.data.msg){
            setRatingMsg(response.data.msg)
        }else{
            setRatingMsg('Rating posted successfully')
            console.log(response.data)
        }
        setTimeout(() => {
            setRatingMsg('')
        }, 2000);
    } catch (error) {
        console.log('Error says: ', error)
    }
}

// get likes
const [likes, setLikes] = useState([])
const getLikes = async(id)=>{
    try {
        const response = await axios.get(`${baseURL}/users/likes?user_id=${id}`)
        setLikes(response.data)
    } catch (error) {
        console.log('Error says: ', error)
    }
}


// post a like
const [postedLikeMsg, setPostedLikeMsg] = useState('')
const postLike = async(data)=>{
    try {
        const response = await axios.post(`${baseURL}/likes`, data)
        console.log(response)
        if(response.data.code === 200){
            getLikes(data.user_id)
        }
        if(response.data.msg){
            setPostedLikeMsg(response.data.msg)          
        }
        
    } catch (error) {
        console.log('Error says: ', error)
    }
}


const removeLike = async (data) => {
    try {
        const response = await fetch(`${baseURL}/likes`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data), // Send data as JSON in the request body
        });

        const result = await response.json(); // Parse the JSON response
        if(result.code === 200){
            getLikes(data.user_id)
        }
        if (result.msg) {
            setPostedLikeMsg(result.msg);
            // console.log(result);
        } else {
            setPostedLikeMsg('Like removed successfully');
            // getLikes(data.user_id)
        }
    } catch (error) {
        console.log('Error says: ', error);
    }
};

const [reviews, setReviews] = useState([]);
const [reviewsLoader, setReviewsLoader] = useState(true);
const getReviews = async (id) => {
    try {
        const response = await axios.get(`${baseURL}/reviews?product_id=${id}`);
        setReviews(response.data);
        setReviewsLoader(false)
        // console.log(response)
    } catch (error) {
        console.error('Error fetching product:', error);
    }
};
const [ratings, setRatings] = useState([]);
const getRatings = async (id) => {
    try {
        const response = await axios.get(`${baseURL}/ratings?product_id=${id}`);
        // console.log(response)
        setRatings(response.data);
    } catch (error) {
        console.error('Error fetching product:', error);
    }
};



const removeReviews = async (r_data) => {
    const data = {...r_data}
    delete data.id
    try {
        const response = await fetch(`${baseURL}/reviews`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),  // Convert data object to JSON
        });

        const result = await response.json(); // Parse the JSON response
        if(result.code === 200){
            getReviews(r_data.id);
        }; 

        if (result.msg) {
            setReviewMsg(result.msg);
        } else {
            setReviewMsg('Review removed successfully');
        }

        setTimeout(() => {
            setReviewMsg('')
        }, 3000);
    } catch (error) {
        console.log('Error says: ', error);
    }
};

const removeRatings = async (data) => {
    try {
        const response = await fetch(`${baseURL}/ratings`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),  // Convert data object to JSON
        });

        const result = await response.json(); // Parse the JSON response
      if(result.code === 200){
            getRatings(data.product_id);
        };
        if (result.msg) {
            setRatingMsg(result.msg);
        } else {
           setTimeout(() => {
             setRatingMsg('');
           }, 2000);
        }
    } catch (error) {
        console.log('Error says: ', error);
    }
};





// edit ratings and reviews
const editRating = async(data)=>{
    try {
        const response = await axios.put(`${baseURL}/ratings`, data)
        if(response.data.msg){
            setRatingMsg(response.data.msg)
        }else{
            setRatingMsg('Rating updated successfully')
            console.log(response.data)
        }
        setTimeout(() => {
            setRatingMsg('')
        }, 2000);
    } catch (error) {
        console.log('Error says: ', error)
    }
}

const editAReview = async(id, data)=>{
    try {
        const response = await axios.put(`${baseURL}/reviews/${id}`, data)
        if(response.data.msg){
            setReviewMsg(response.data.msg)
        }else{
            setReviewMsg('Review updated successfully')
            console.log(response.data)
        }
        setTimeout(() => {
            setReviewMsg('')
        }, 2000);
    } catch (error) {
        console.log('Error says: ', error)
    }
}


    const values = {
        merchantId,
        baseURL,
        allProducts,
        getAllProducts,
        productsLoader,

        createUser,
        successRegister,
        failedRegisterMsg,
        setFailedRegisterMsg,
        registerLoader,

        loginLoader,
        loginUser,
        
        successfullLogin,
        setSuccessfulLogin,
        failedLoginMsg,
        currentUserInfo,
        setCurrenUserInfo,

        postReview,
        postRating,
        removeReviews,
        removeRatings,
        reviews, getReviews, ratings, getRatings, reviewsLoader,

        allCategories,
        getAllCategories,

        postLike,
        getLikes,
        likes,
        removeLike,

        editRating,
        editAReview,


        loginMsg,
        registerMsg,
        reviewMsg,
        ratingMsg,

        setPostedLikeMsg,
        postedLikeMsg
    }

    return(
        <APIcontext.Provider value={values}>
            {children}
        </APIcontext.Provider>
    )
}