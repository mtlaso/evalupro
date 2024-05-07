import type { ApiResponseType } from '@/types'
import { handleApiResponse } from '@/services/handleApiResponse'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

const getProducts = async (jwt: string, productNameFilter?: string): Promise<ApiResponseType> => {
  try {
    const res = await fetch(`${BACKEND_URL}/api/products?` + new URLSearchParams({
      ...(productNameFilter && { productNameFilter })
    }), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`
      }

      // Ajouter un paramètre de requête pour filtrer les produits par nom
      // ...(productNameFilter && { search: new URLSearchParams({ name: productNameFilter }) })
    })

    return await handleApiResponse(res)
  } catch (e) {
    return {
      status: 500,
      message: 'Impossible d\'attendre le serveur lors de la récupérations des produits',
      errors: [
        {
          field: 'network',
          message:
            e instanceof Error ? e.message : 'Erreur lors de la communication avec le serveur'
        }
      ]
    } as ApiResponseType
  }
}

const createProduct = async (jwt: string, newProduct: FormData): Promise<ApiResponseType> => {
  try {

    const res = await fetch(`${BACKEND_URL}/api/products`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${jwt}`
        // Ne PAS spécifier Content-Type pour les uploads de fichiers
      },
      body: newProduct
    })

    return await handleApiResponse(res)
  } catch (e) {
    return {
      status: 500,
      message: 'Impossible d\'attendre le serveur lors d\'ajout de produits',
      errors: [
        {
          field: 'network',
          message:
            e instanceof Error ? e.message : 'Erreur lors de la communication avec le serveur'
        }
      ]
    } as ApiResponseType
  }
}

const updateProduct = async (jwt: string, updatedProduct: FormData): Promise<ApiResponseType> => {
  try {
    const res = await fetch(`${BACKEND_URL}/api/products/${updatedProduct.get('id')}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${jwt}`
        // Ne PAS spécifier Content-Type pour les uploads de fichiers
      },
      body: updatedProduct
    })

    return await handleApiResponse(res)
  } catch (e) {
    return {
      status: 500,
      message: 'Impossible d\'attendre le serveur lors de la mise à jour du produit',
      errors: [
        {
          field: 'network',
          message:
            e instanceof Error ? e.message : 'Erreur lors de la communication avec le serveur'
        }
      ]
    } as ApiResponseType
  }
}

const deleteProduct = async (jwt: string, productId: string): Promise<ApiResponseType> => {
  try {
    const res = await fetch(`${BACKEND_URL}/api/products/${productId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`
      }
    })

    return await handleApiResponse(res)
  } catch (e) {
    return {
      status: 500,
      message: 'Impossible d\'attendre le serveur lors de la suppression du produit',
      errors: [
        {
          field: 'network',
          message:
            e instanceof Error ? e.message : 'Erreur lors de la communication avec le serveur'
        }
      ]
    } as ApiResponseType
  }
}

const productsService = { getProducts, createProduct, updateProduct, deleteProduct }
export { productsService }