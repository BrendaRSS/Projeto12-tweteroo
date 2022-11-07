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
		username: "cat",
		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
		tweet: "eu amo o hub"
	},
	{
		username: "coragem",
		avatar: "http://24.media.tumblr.com/tumblr_m328v7ZOvX1r65xbpo1_500.gif",
		tweet: "Eu gosto de bob esponja"
	},
	{
		username: "Catedog",
		avatar: "https://www.hypeness.com.br/1/2018/09/25247072b28ced1a13d935dc1445b9dd.1000x842x1-e1536014997910.jpg",
		tweet: "Eu gosto do molusco"
	},
	{
		username: "Gary",
		avatar: "http://pa1.narvii.com/6343/be20b6ad3a6451eda2e13646de2aa8ff81f5b694_00.gif",
		tweet: "EU gosto de programar"
	}
]

let avatarDoUsuario=""

app.post("/sign-up", (req, res) => {
	const {username, avatar} = req.body;

	if(!username||!avatar){
		res.status(400).send("Todos os campos são obrigatórios!");
		return;
	}

	let login={
		username:username,
		avatar:avatar
	};

	usuarios.push(login);
	avatarDoUsuario=avatar;

	res.status(201).send("ok")
})

app.post("/tweets", (req, res) => {
	const {tweet, username} = req.body;
	tweets.push(tweet);
	// console.log("tweet:",tweet)
	// console.log("tweets:", tweets)
	// console.log("usuarios:",usuarios)

	if(!tweet||!username){
		res.status(400).send("Todos os campos são obrigatórios!");
		return;
	}

	let newTweet={
		username:username,
		avatar:avatarDoUsuario,
		tweet:tweet
	}
	
	ultimosTweetsPublicados.push(newTweet)
	console.log(ultimosTweetsPublicados)

	res.status(201).send("ok")
})

app.get("/tweets", (req, res) => {
	let lastTweet=[]
	for(let i=1;i<=10;i++){
		lastTweet.push(ultimosTweetsPublicados[ultimosTweetsPublicados.length-i])
	}
	// console.log("10 tweets:", lastTweet)
	res.send(lastTweet);
});

app.listen(5000);