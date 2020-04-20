import React, {useState, useEffect} from "react";
import {NativeSelect, FormControl} from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchContries } from "../../api";

const CountryPicker = ({handleCountryChange}) =>{
    const [fetchCountries, setFetchCountries] = useState([]);
    useEffect(()=>{
        const fetchAPI = async () => {
            setFetchCountries(await fetchContries());
        }
        fetchAPI();
    }, [setFetchCountries]);
    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchCountries.map((country, index)=><option key={index} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;