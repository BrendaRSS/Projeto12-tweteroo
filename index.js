import express from 'express';
import cors from "cors"

const app = express();
app.use(cors());
app.use(express.json())

const usuarios = [
	{
		username: 'bobesponja',
		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
	},
	{
		username: "patrick",
		avatar: "https://zonacuriosa.com/wp-content/uploads/2020/11/curiosidades-incriveis-sobre-o-patrick-estrela.jpg",
	},
	{
		username: "molusco",
		avatar: "https://uploads-ssl.webflow.com/5fa452663d18a6699f11aa07/61f02d4d0e1c6f6744602441_squidward%20main.png"
	},
	{
		username: "cat",
		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
	}
]

const tweets = [
	{
		username: "bobesponja",
		tweet: "Eu gosto de encher o saco das pessoas que eu amo"
	}
]

const ultimosTweetsPublicados = [
	{
		username: "bobesponja",
		avatar: "https://cdns-images.dzcdn.net/images/artist/77220ccb5a36d0e5df2c9e47f2c89de4/500x500.jpg",
		tweet: "eu amo o hub"
	},
	{
		username: "bobesponja",
		avatar: "https://cdns-images.dzcdn.net/images/artist/77220ccb5a36d0e5df2c9e47f2c89de4/500x500.jpg",
		tweet: "Eu gosto de encher o saco das pessoas que eu amo"
	},
	{
		username: "patrick",
		avatar: "https://zonacuriosa.com/wp-content/uploads/2020/11/curiosidades-incriveis-sobre-o-patrick-estrela.jpg",
		tweet: "sei lá, acho que minha vida tá coisada"
	},
	{
		username: "molusco",
		avatar: "https://uploads-ssl.webflow.com/5fa452663d18a6699f11aa07/61f02d4d0e1c6f6744602441_squidward%20main.png",
		tweet: "Acredite na fantasia que você quiser mas faça isso longe de mim"
	},
	{
		username: "bobesponja",
		avatar: "https://cdns-images.dzcdn.net/images/artist/77220ccb5a36d0e5df2c9e47f2c89de4/500x500.jpg",
		tweet: "eu amo o hub"
	},
	{
		username: "bobesponja",
		avatar: "https://cdns-images.dzcdn.net/images/artist/77220ccb5a36d0e5df2c9e47f2c89de4/500x500.jpg",
		tweet: "eu amo o hub"
	},
	{
		username: "bobesponja",
		avatar: "https://cdns-images.dzcdn.net/images/artist/77220ccb5a36d0e5df2c9e47f2c89de4/500x500.jpg",
		tweet: "eu amo o hub"
	},
	{
		username: "cat",
		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
		tweet: "eu amo o hub"
	}
]

let avatarDoUsuario=""

app.post("/sign-up", (req, res) => {
	const login = req.body
	usuarios.push(login)
	avatarDoUsuario=login.avatar

	res.send("ok")
})

app.post("/tweets", (req, res) => {
	const tweet = req.body
	tweets.push(tweet)
	console.log("tweet:",tweet)
	console.log("tweets:", tweets)
	console.log("usuarios:",usuarios)
	
	res.send("ok")
})

app.get("/tweets", (req, res) => {
	res.send(ultimosTweetsPublicados);
});

app.listen(5000);