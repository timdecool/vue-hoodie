<template>
    <div
        class=" hidden fixed inset-0  bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
        id="my-modal"
    >
        
    <div
        class="relative top-20 mx-auto p-5 border w-2/4 shadow-lg  rounded-md bg-white"
    >
            <div class="mt-0 text-center">
                <div
                    class="mx-auto flex items-center justify-center"
                >
                <h3 class="text-lg leading-6 font-medium text-gray-900">VOTRE PANIER: / TOTAL EN EUROS / </h3>
                </div>
                
                <div class="mt-2 px-7 py-3">
                    <p class="text-sm text-gray-500"> 
                        <!-- liste panier -->
                        <div
                            class="p-5 border shadow-lg rounded-md bg-white text-left h-24 flex justify-start space-x-8 mb-2"
                        >
                            <img
                                class="rounded-md object-cover"
                                src="https://cdn.shopify.com/s/files/1/0550/6996/6414/products/6560_1800x.jpg?v=1645098113"
                                alt="mini preview" />
                            <span>Dedicated Fallun (L) </span> <!--  name -->
                            <span>105</span>  <!--  prix unité -->
                            <span>x2</span> <!--  quantité -->
                            <span>TOTAL</span> <!--  quantité*price -->
                        </div>
                        
                        
                    </p>
                </div>
                <div class="items-center px-4 py-3">
                    <button
                        id="ok-btn"
                        class="px-4 py-2 bg-tertiary-contrast text-white text-base font-medium rounded-md w-full shadow-sm hover:opacity-90"
                    >
                        CONFIRM COMMAND
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>