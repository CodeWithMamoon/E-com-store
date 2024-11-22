
'use client'

import { useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'
import Rating from '@mui/material/Rating';
import { Grid, LinearProgress, Box } from '@mui/material';
import ProductReviewcard from './ProductReviewcard';
import men_kurta from '../../../Data/Men_kurta';
import Homesectioncard from '../Homesectioncard/Homesectioncard';
import {useNavigate } from 'react-router-dom';
import product from './Product';

const reviews = { href: '#', average: 4, totalCount: 117 }


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ProductDetails() {
    const [selectedColor, setSelectedColor] = useState(product.colors[0])
    const [selectedSize, setSelectedSize] = useState(product.sizes[2])
    const navigate = useNavigate();
 
    const handleAddtoCart=()=>{
        navigate("/cart")
    }
    return (
        <div className="bg-white">
            <div className="pt-6">
                <nav aria-label="Breadcrumb">
                    <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        {product.breadcrumbs.map((breadcrumb) => (
                            <li key={breadcrumb.id}>
                                <div className="flex items-center">
                                    <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                                        {breadcrumb.name}
                                    </a>
                                    <svg
                                        fill="currentColor"
                                        width={16}
                                        height={20}
                                        viewBox="0 0 16 20"
                                        aria-hidden="true"
                                        className="h-5 w-4 text-gray-300"
                                    >
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                </div>
                            </li>
                        ))}
                        <li className="text-sm">
                            <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                {product.name}
                            </a>
                        </li>
                    </ol>
                </nav>
                <section className=' grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10'>
                    {/* Image gallery */}
                    <div className="flex flex-col items-center">
                        <div className=" overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
                            <img
                                alt={product.images[0].alt}
                                src={product.images[0].src}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>

                        <div className="flex flex-wrap space-x-5 justify-center">
                            {product.images.map((item) => (
                                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg mt-4 max-w-[5rem] max-h-[5rem]">
                                    <img
                                        alt={item.alt}
                                        src={item.src}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                            ))}
                        </div>


                    </div>

                    {/* Product info */}
                    <div className="lg:col-span-1 max-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
                        <div className="lg:col-span-2">
                            <h1 className='text-xl lg:text-xl text-gray-900'>Universel soft fit</h1>
                            <h2 className="font-semibold text-xl lg:text-xl text-gray-900 opacity-50 pt-1">Solid women White TOp</h2>

                        </div>

                        {/* Options */}
                        <div className="mt-4 lg:row-span-3 lg:mt-0">
                            <h2 className="sr-only">Product information</h2>
                            <div className=' flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6'>
                                <p className='font-semibold'>
                                    RS:1900
                                </p>
                                <p className='font-semibold line-through'>
                                    RS:2100
                                </p>
                                <p className='font-semibold text-green-600'>
                                    50%OFF
                                </p>
                            </div>

                            {/* Reviews */}
                            <div className="mt-6">
                                <div className="flex items-center space-x-5">
                                    <Rating name="read-only" value={4.5} readOnly />
                                    <p className="opacity-50 text-sm">Reviews: 5000</p>
                                    <p className="text-sm ml-3 font-medium text-indigo-600 hover:text-indigo-500">Rating: 520</p>
                                </div>
                            </div>


                            <form className="mt-10">

                                {/* Sizes */}
                                <div className="mt-10">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-medium text-gray-900">Size</h3>

                                    </div>

                                    <fieldset aria-label="Choose a size" className="mt-4">
                                        <RadioGroup
                                            value={selectedSize}
                                            onChange={setSelectedSize}
                                            className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                                        >
                                            {product.sizes.map((size) => (
                                                <Radio
                                                    key={size.name}
                                                    value={size}
                                                    disabled={!size.inStock}
                                                    className={classNames(
                                                        size.inStock
                                                            ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                                            : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                                        'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-indigo-500 sm:flex-1 sm:py-6',
                                                    )}
                                                >
                                                    <span>{size.name}</span>
                                                    {size.inStock ? (
                                                        <span
                                                            aria-hidden="true"
                                                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-500"
                                                        />
                                                    ) : (
                                                        <span
                                                            aria-hidden="true"
                                                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                                        >
                                                            <svg
                                                                stroke="currentColor"
                                                                viewBox="0 0 100 100"
                                                                preserveAspectRatio="none"
                                                                className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                                            >
                                                                <line x1={0} x2={100} y1={100} y2={0} vectorEffect="non-scaling-stroke" />
                                                            </svg>
                                                        </span>
                                                    )}
                                                </Radio>
                                            ))}
                                        </RadioGroup>
                                    </fieldset>
                                </div>

                                <button
                                    variant='contained'
                                    className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    onClick={handleAddtoCart}
                                >
                                    Add to Bag
                                </button>
                            </form>
                        </div>

                        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                            {/* Description and details */}
                            <div>
                                <h3 className="sr-only">Description</h3>

                                <div className="space-y-6">
                                    <p className="text-base text-gray-900">{product.description}</p>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                                <div className="mt-4">
                                    <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                        {product.highlights.map((highlight) => (
                                            <li key={highlight} className="text-gray-400">
                                                <span className="text-gray-600">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                                <div className="mt-4 space-y-6">
                                    <p className="text-sm text-gray-600">{product.details}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Reviwe and Rating */}
                <section>
                    <h1 className=' font-semibold text-lg pb-4'>Recenrt Review & Rating</h1>
                    <div className='border p-5'>
                        <Grid container spacing={7}>
                            <Grid item xs={7}>
                                <div className='space-y-5'>
                                    {[1, 1, 1, 1].map((item) => <ProductReviewcard />)}
                                </div>
                            </Grid>

                            <Grid item xs={5}>
                                <h1 className='tex-xl font-semibold pb-1'>Product Rating</h1>
                                <div className='text-xl flex items-center space-x-3'>
                                    <Rating name="read-only" value={4.5} readOnly precision={.5} />
                                    <p className=' opacity-60'>5000 Rating</p>
                                </div>
                                <Box className='mt-5'>
                                    <Grid container alignItems='center' gap={2}>
                                        <Grid item xs={2}>
                                            <p>Exelent</p>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <LinearProgress sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7, color: "success" }} variant="determinate" value={50} />
                                        </Grid>
                                    </Grid>
                                    <Grid container alignItems='center' gap={2}>
                                        <Grid item xs={2}>
                                            <p>Exelent</p>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <LinearProgress sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7, color: "success" }} variant="determinate" value={50} />
                                        </Grid>
                                    </Grid>
                                    <Grid container alignItems='center' gap={2}>
                                        <Grid item xs={2}>
                                            <p>Exelent</p>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <LinearProgress sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7, color: "success" }} variant="determinate" value={50} />
                                        </Grid>
                                    </Grid>
                                    <Grid container alignItems='center' gap={2}>
                                        <Grid item xs={2}>
                                            <p>Exelent</p>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <LinearProgress sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7, color: "success" }} variant="determinate" value={50} />
                                        </Grid>
                                    </Grid>
                                    <Grid container alignItems='center' gap={2}>
                                        <Grid item xs={2}>
                                            <p>Exelent</p>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <LinearProgress sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7, color: "success" }} variant="determinate" value={50} />
                                        </Grid>
                                    </Grid>
                                    <Grid container alignItems='center' gap={2}>
                                        <Grid item xs={2}>
                                            <p>Exelent</p>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <LinearProgress sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7, color: "success" }} variant="determinate" value={50} />
                                        </Grid>
                                    </Grid>

                                </Box>
                            </Grid>

                        </Grid>

                    </div>
                </section>

                {/* semiller Product */}
                <section className='pt-10'>
                    <h1 className=' ml-4 py-5 text-xl font-bold'>Semiller Product</h1>
                    <div className=' flex flex-wrap space-y-5'>
                        {men_kurta.map((item) => <Homesectioncard product={item} />)}
                    </div>
                </section>
            </div>
        </div>
    )
}
