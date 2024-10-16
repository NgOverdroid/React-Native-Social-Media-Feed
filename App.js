import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Post from './component/Post';

const data = [
  {
    user: "Traveler",
    profile_img: "https://cdn.picrew.me/app/image/img_NM6A7W8Q7PmToaRe.png",
    content_img: require('./assets/content_1.jpg'),
    content: "Exploring ancient ruins in distant lands",
    likes: 1033,
    comments: 79,
    shares: 15,
  },
  {
    user: "Thalassophile",
    profile_img: "https://cdn.picrew.me/app/image/img_KxEVYz0TcyiuSyGB.png",
    content_img: require('./assets/content_2.jpg'),
    content: "Enjoying a beautiful day in the beach",
    likes: 211,
    comments: 18,
    shares: 10,
  },
  {
    user: "ArtEnthusiast",
    profile_img: "https://cdn.picrew.me/app/image_maker/1473879/icon_u2wZYXyBTqOIY6bw.png",
    content_img: require("./assets/content_3.jpeg"),
    content: "Create a vibrant painting inspired by nature",
    likes: 4170,
    comments: 663,
    shares: 58,
    },
];

export default function App() {
  return (
    <>
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.text}>Social Media Feed</Text>
      </View>
      <ScrollView>
        {
        data.map(item => 
        <Post user={item.user} 
          profile_img={item.profile_img} 
          content_img={item.content_img}
          content={item.content}
          likes={item.likes}
          comments={item.comments}
          shares={item.shares}
          key={item.user}/>)
        }
      </ScrollView>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff  ',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: '5%'
  },
  banner: {
    backgroundColor: 'lightblue',
    width: '100%',
    height: '10%',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'white'
  }
});
