export const API_KEY = 'AIzaSyA92ABP3LdCpnybq3SWExzAAxuKq3ca6aI'

export const value_converter = (value) =>{
    if(value>=1000000)
    {
        return (Math.floor(value/10000000) +1 )+"M"
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+"K"
    }
    else{
        return value
    }
}