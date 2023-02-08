import React from 'react'

const Cards = ({_img, _titre, _nomCockail, _description}) => {
  return (
    <div>
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-3">
            <a href="#">
                <img class="rounded-t-lg w-96 h-96" src={_img} alt="" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{_titre}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{_nomCockail}</p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{_description}</p>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    DETAILS
                </a>
            </div>
        </div>
    </div>
)
}

export default Cards;