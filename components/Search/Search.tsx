import { useState } from "react";
import Loader from "@components/Loader/Loader";
import styles from "./Search.module.css"
import OverlaySearch from "@components/OverlaySearch/OverlaySearch";
/* const InputSearch = ({ search, handleDelete, handleIsSearch, handleSubmit, handlerClose, register }) => {
    return (
        <>
            {
                search ?
                    <div className="search-header container flex flex-row items-center justify-around w-full py-4 px-8">
                        <form method="GET" className="flex items-center  w-4/5" onSubmit={handleSubmit(handleIsSearch)}>
                            <div className="relative text-white focus-within:text-white w-full flex flex-row justify-between items-center h-12">
                                <span className="relative flex items-center pl-4 mr-2 z-30">
                                    <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                    </button>
                                </span>
                                <input type="search" name="search" className="absolute inset-y-0 left-0 py-2 text-sm text-white bg-black-300 rounded-md pl-14 focus:outline-non focus:text-white w-full" placeholder="Search" defaultValue="One piece" {...register("search", { required: true, maxLength: 100 })} />

                                <span className="relative inset-y-0 flex items-center  mr-2">
                                    <button type="delete" className="p-1 focus:outline-none focus:shadow-outline flex items-center" onClick={handleDelete}>
                                        <span className="material-icons text-gray-200">
                                            backspace
                                        </span>
                                    </button>
                                </span>
                            </div>
                        </form>
                        <div className="close px-2 cursor-pointer" onClick={handlerClose}>
                            <span className="text-primary text-center text-3xl material-icons focus:animate-spin" >
                                close
                            </span>
                        </div>
                    </div>

                    :
                    <></>
            }
        </>
    )
}

const BodySearch = ({ TextToSearch }) => {

    return (<div className="search-body flex items-center w-full justify-center">
        {
            TextToSearch !== '' ?
                <ul>
                    <li className="text-white">{TextToSearch}</li>
                </ul>
                : <Loader />
        }
    </div>)
}
const OverlaySearch = ({ search, handlerSearch }) => {
    const [isSearch, setisSearch] = useState({})
    let searchClass = search ? 'block' : 'hidden';
    const { register, handleSubmit, watch, resetField } = useForm();
    const handlerClose = () => {
        handlerSearch(!search);
    }

    const handleIsSearch = (data) => {
        console.log('Que busca??', data)
        setisSearch(true);
    }
    const handleDelete = () => {
        resetField("search")
    }
    let TextToSearch = watch("search");

    return (
        <div className={`overlay-search min-w-full h-full bg-black-200 z-20 fixed overflow-hidden inset-0 ${searchClass}`}>
            {
                search ?
                    <>
                        <InputSearch search={search} handleSubmit={handleSubmit} register={register} handlerClose={handlerClose} handleIsSearch={handleIsSearch} handleDelete={handleDelete} />
                        <BodySearch watch={watch} search={search} TextToSearch={TextToSearch}
                            isSearch={isSearch} />
                    </>
                    :
                    <></>
            }
        </div>
    )
} */

const Search = () => {
    const [search, setSearch] = useState(false);

    const handlerSearch = () => {
        setSearch(!search);
    }

    return (
        <>
            <div className={styles["search-navigation"]} >
                <svg className={styles["icon-search"]} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handlerSearch}>
                    <path d="M16.6667 14.6667H15.6133L15.24 14.3067C16.5467 12.7867 17.3333 10.8133 17.3333 8.66667C17.3333 3.88 13.4533 0 8.66667 0C3.88 0 0 3.88 0 8.66667C0 13.4533 3.88 17.3333 8.66667 17.3333C10.8133 17.3333 12.7867 16.5467 14.3067 15.24L14.6667 15.6133V16.6667L21.3333 23.32L23.32 21.3333L16.6667 14.6667ZM8.66667 14.6667C5.34667 14.6667 2.66667 11.9867 2.66667 8.66667C2.66667 5.34667 5.34667 2.66667 8.66667 2.66667C11.9867 2.66667 14.6667 5.34667 14.6667 8.66667C14.6667 11.9867 11.9867 14.6667 8.66667 14.6667Z" />
                </svg>
            </div>
            {
                search ? <OverlaySearch handlerSearch={handlerSearch} /> : <></>
            }
        </>
    )
}

export default Search;