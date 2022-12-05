import { Request, Response } from "express";
import { RecipeBusiness } from "../business/RecipeBusiness";
import { BaseError } from "../errors/BaseError";
import { ICreateRecipeInputDTO, IGetAllRecipesInputDTO, IGetRecipeDetailsInputDTO } from "../models/Recipe";

export class RecipeController {
    constructor(
        private recipeBusiness: RecipeBusiness
    ) {}

    public getAllRecipes = async (req: Request, res: Response) => {
        try {
            const input: IGetAllRecipesInputDTO = {
                token: req.headers.authorization
            }

            const response = await this.recipeBusiness.getAllRecipes(input)

            res.status(200).send(response)
        } catch (error: unknown) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado ao buscar todas as receitas" })
        }
    }

    public getRecipeDetails = async (req: Request, res: Response) => {
        try {
            const input: IGetRecipeDetailsInputDTO = {
                token: req.headers.authorization,
                recipeId: req.params.recipeId
            }

            const response = await this.recipeBusiness.getRecipeDetails(input)

            res.status(200).send(response)
        } catch (error: unknown) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado ao buscar detalhes de uma receita" })
        }
    }

    public createRecipe = async (req: Request, res: Response) => {
        try {
            const input: ICreateRecipeInputDTO = {
                token: req.headers.authorization,
                title: req.body.title,
                description: req.body.description,
                imageUrl: req.body.imageUrl
            }

            const response = await this.recipeBusiness.createRecipe(input)

            res.status(201).send(response)
        } catch (error: unknown) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado ao criar receita" })
        }
    }
}