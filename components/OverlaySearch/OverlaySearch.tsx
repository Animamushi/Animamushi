import styles from "./OverlaySearch.module.css";
import {
    Formik,
    Form,
    Field
} from 'formik';
import { MouseEventHandler, useEffect, useState } from "react";

interface MyFormValues {
    search: string;
}
interface ErrorValues {
    search: string | unknown;
}
// useSearch hook

const useSearch = (text: string) => {
    const [searchValue, setSearchValue] = useState({});
    useEffect(() => {
        const searchEngine = async () => {
            const response = await fetch(`https://kitsu.io/api/edge/anime?filter[text]=${text}&page[limit]=5&page[offset]=0`);

            console.log(response)
        }
        searchEngine();
    }, [])
    return searchValue;
}

const OverlaySearch = ({ handlerSearch }: { handlerSearch: MouseEventHandler }) => {
    const initialValues: MyFormValues = { search: '' };
    const [searchResult, setSearchResult] = useState([]);

    const handlerSubmitForm = (values: MyFormValues, actions: any) => {

        actions.setSubmitting(false);
        const searchEngine = async (text: string) => {
            const response = await fetch(`https://kitsu.io/api/edge/anime?filter[text]=${text}&page[limit]=5&page[offset]=0`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/vnd.api+json' }
            });
            const { data, errors } = await response.json();
            if (response.ok) {
                const resultData = data.map((anime: any) => {
                    const { attributes: { canonicalTitle } } = anime;
                    return canonicalTitle;
                })
                //console.log(resultData);
                setSearchResult(resultData);
            } else {
                console.log("fetch error!", errors)
            }
        }
        searchEngine(values.search);
    }
    const handlerValidation = (values: MyFormValues) => {
        const { search } = values
        const errors: any = {};
        if (!search) {
            errors.search = 'no encontrado'
        } else if (!/^[0-9a-zA-Z_ ]+$/.test(search)) {
            errors.search = 'Invalid search - only letters and numbers'
        } else if (search.length > 60) {
            errors.search = 'Invalid search - max characters 60'
        }
        return errors;
    }

    return (
        <div className={styles['overlay-search']}>
            <Formik
                initialValues={initialValues}
                onSubmit={handlerSubmitForm}
                validate={handlerValidation}
            >
                {({ handleReset, values }) => (
                    <>
                        <Form className={styles.form}>
                            <div className="relative text-white focus-within:text-white w-full flex flex-row items-center h-12">
                                <span className="relative flex items-center pl-4 mr-2 z-30">
                                    <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                    </button>
                                </span>
                                <Field id="search" name="search" className="absolute inset-y-0 left-0 py-2 text-sm text-white bg-black-300 rounded-md pl-14 focus:outline-none focus:text-white w-full" placeholder="Search" />
                                <span className="absolute right-0 inset-y-0 flex items-center  mr-2">
                                    <button className="p-1 focus:outline-none focus:shadow-outline flex items-center" onClick={handleReset}>
                                        <span className="material-icons text-gray-200">
                                            backspace
                                        </span>
                                    </button>
                                </span>
                            </div>
                            <button className="px-3 focus:outline-none focus:shadow-outline flex items-center" onClick={handlerSearch}>
                                <span className="material-icons text-primary">
                                    close
                                </span>
                            </button>
                        </Form>
                        {
                            values.search ?
                                <div className={styles["search-results"]}>
                                    <ul>
                                        {searchResult.map((name, i) => <li key={i}>{name}</li>)}
                                    </ul>

                                </div> : <></>

                        }
                    </>
                )}
            </Formik>
        </div>
    )
}
export default OverlaySearch;