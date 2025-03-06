import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url = "http://localhost:4000";
  const [token, setToken] = useState("");
  const [item_list, setItemList] = useState([]); // Changed from food_list to item_list for consistency

  const addToCart = async (itemId) => {
    try {
      
       if(!cartItems[itemId]){
        setCartItems((prev)=>({...prev,[itemId]:1}))
       }else{
        setCartItems((prev) =>({...prev,[itemId]: prev[itemId]+1}))
       }
       if(token){
        await axios.post(url+'/api/cart/add',{itemId},{headers:{token}})
       }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const removeFromCart = async (itemId) => {
    try {
      setCartItems((prev)=>({...prev,[itemId]: prev[itemId]-1}));
      if(token){
        await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
      }
    }catch(error){
      console.log(error)
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for(const item in cartItems){
      if(cartItems[item]>0){
        let itemInfo = item_list.find((product)=>product._id === item)
        totalAmount += itemInfo.price * cartItems[item]
       }
     }
    return totalAmount;
    }

  const fetchItemList = async () => {
    try {
      const response = await axios.get(url+'/api/laptop/list');
      // console.log(response)
      // console.log(response.data)
      // console.log(response.data.data)
      setItemList(response.data.data)
      // console.log("success")
      // console.log("hii",response)
    } catch (error) {
      console.error("Error fetching item list:", error);
    }
    
  };

  const loadCartData = async (token,id) => {
       
    console.log("cart:",cartItems[id])
    try {
      
      const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
      console.log("response:",response)
      // console.log(cartItems[id])
      setCartItems(response.data.cartData); 
    } catch (error) {
      console.error("Error loading cart data:", error);
    }
  };

  useEffect(()=>{
    console.log(cartItems);
  },[cartItems])

  // useEffect(() => {
  //   async function loadData(){
  //     await fetchItemList();
  //     if(localStorage.getItem("token")){
  //       setToken(localStorage.getItem("token"));
  //       console.log()
  //       await loadCartData(localStorage.getItem("token"))
  //     }
  //   } 
  // loadData() }, []);

  useEffect(() => {
    async function loadData() {
      try {
        // Fetch the list of items
        await fetchItemList();
  
        // Check if token exists in localStorage
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
          setToken(storedToken);
          
          // Load cart data using the token
          try{

            // await loadCartData(storedToken);
          }catch(error){
            console.log("this fucking error",error)
          }
        }
      } catch (error) {
        console.error("Error loading data:", error);
      }
    }
  
    loadData();
  }, []);

  const contextValue = {
    item_list, 
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
