import { IRecipeDB } from "../../models/Recipe"
import { IUserDB } from "../../models/User"

export const users: IUserDB[] = [
    {
        id: "5a1b4ed5-6fab-4ca5-988f-5670467028ce",
        name: "Astrodev",
        email: "astrodev@gmail.com",
        password: "$2a$12$RBAWOHpUvGTE.MEeIohAzec9tlVqtNA/x2PMPt/Hrt0vI437cQdJC" // bananinha
    },
    {
        id: "52592377-3f90-4e33-8819-c4c2d97455e4",
        name: "Fulano",
        email: "fulano@gmail.com",
        password: "$2a$12$PULtVNlAll87D6E8pR/0HO9vbzVDPaUMA89rc5cNmYoAAepbwmkcO" // qwerty00
    },
    {
        id: "639d90bb-392a-46eb-b69a-1ef9478f7ce6",
        name: "Ciclana",
        email: "ciclana@gmail.com",
        password: "$2a$12$LkWMqS3oPhP2iVMcZOVvWer9ahUPulxjB0EA4TWPxWaRuEEfYGu/i" // asdfg123
    }
]

export const recipes: IRecipeDB[] = [
    {
        id: "a5d396b8-7e5c-4a45-9ac0-fed7dd517319",
        title: "Dadinho de tapioca",
        description: "Aqueça o leite em uma panela. Quando o leite estiver bem quente, desligue o fogo, adicione o queijo coalho ralado e continue mexendo. Logo em seguida adicione a farinha de tapioca granulada e continue mexendo. Adicione o sal e pimenta a gosto. Pare de mexer quando todos os ingredientes estiverem bem misturados. Despeje em uma forma coberta com papel filme (pvc), cubra em cima também e leve para a geladeira por duas horas. Depois retire da geladeira, corte em quadradinhos (dadinhos) e frite aos poucos em óleo quente ou coloque no forno até dourar. Sirva em seguida acompanhado da geleia de pimenta agridoce.",
        createdAt: "01/12/2022",
        imageUrl: "https://www.mariareceita.com.br/wp-content/uploads/2022/03/receita-dadinho-tapioca-facil-original-1200x900.jpg",
        creatorId: "5a1b4ed5-6fab-4ca5-988f-5670467028ce"
    },
    {
        id: "5b75ce30-f858-4f00-83d1-e86249622523",
        title: "Caipirinha",
        description: "Pegue o limão coloque-o na horizontal e retire as duas pontas, vire-o na vertical e corte-o ao meio, retire os meio (parte branca) do limão e fatie. Coloque o limão fatiado e duas colheres bem cheias de açúcar dentro de um copo próprio para a bebida e com um socador esprema até que saia todo o suco do limão. Coloque pedras de gelo até quase encher o copo (aproximadamente 12 pedras pequenas de gelo) e encha o copo com a cachaça. Mexa bem com uma colher ou coloque em uma coqueteleira e sirva-se!",
        createdAt: "01/12/2022",
        imageUrl: "https://img.itdg.com.br/images/recipes/000/128/825/319875/319875_original.jpg",
        creatorId: "5a1b4ed5-6fab-4ca5-988f-5670467028ce"
    },
    {
        id: "2d78c209-b285-405d-bd23-7793e4ed26b0",
        title: "Misto quente de forno",
        description: "Unte um refratário com margarina. Forre o fundo com 6 fatias de pão de forma. Colocar metade do molho de tomate temperado, presunto, camada de requeijão, metade da mussarela, restante do pão de forma, molho de tomate, creme de leite, mussarela, tomate em rodelas, orégano. Leve o refratário ao forno até a mussarela derreter (fiz no micro-ondas)",
        createdAt: "02/12/2022",
        imageUrl: "https://comidinhasdochef.com/wp-content/uploads/2016/02/Misto-Quente-de-Forno.jpg",
        creatorId: "52592377-3f90-4e33-8819-c4c2d97455e4"
    },
    {
        id: "8c014c69-7867-4582-a23e-bb56e21fe16b",
        title: "Picolé salada de frutas",
        description: "Coloque as frutas picadas em cubinhos na picoleteira. Adicione o suco, usando funil. Leve ao freezer e quando ganhar consistência coloque os palitos. Deixe congelar.",
        createdAt: "03/12/2022",
        imageUrl: "https://img.itdg.com.br/tdg/images/recipes/000/143/411/89302/89302_original.jpg?mode=crop&width=710&height=400",
        creatorId: "639d90bb-392a-46eb-b69a-1ef9478f7ce6"
    }
]