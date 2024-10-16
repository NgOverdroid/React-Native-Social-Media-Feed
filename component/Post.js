import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';

export default function Post({user, profile_img, content_img, content, likes, comments, shares}) {
    const [_likes, setLikes] = useState(false);
    const [_comments, setComments] = useState(comments);
    const [_shares, setShares] = useState(shares);

    return (
    <>
      <View style={styles.container}>
        <View style={styles.profile}>
            <View>
              <Image 
                  source={{ uri: profile_img }} 
                  style={styles.logo}
              />
            </View>
            <View>
              <Text>{user}</Text>
            </View>
        </View>
        <View style={styles.content_container}>
            <View>
              <Text>{content}</Text>
                <Image 
                      source={content_img} 
                      style={styles.img}
                  />
            </View>
            <View style={styles.stats}>
                {_likes ? <View><Text>{likes + 1}</Text></View> : <View><Text>{likes}</Text></View>}
                <View>
                  <Text>{_comments}
                    </Text>
                  </View>
                <View>
                  <Text>{_shares}</Text>
                </View>
            </View>
        </View>
        <View style={styles.button_container}>
            <TouchableOpacity onPress={() => setLikes(!_likes)}>
              <Text style={ _likes && styles.like_button}>ദ്ദി Like</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setComments(_comments + 1)}>
              <Text>㊙ Comment</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShares(_shares + 1)}>
              <Text>➢ Share</Text>
            </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 20,
    marginBottom: 20
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: 'contain',
  },
  content_container: {
    flex: 1,
    width: '100%'
  },
  profile: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  profile_image: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  img: {
    width: '100%',
    height: 200,
    resizeMode: 'cover', 
  },
  button_container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    borderTopWidth: 1,
    borderColor: 'lightgrey',  
    marginTop: 10,
    justifyContent: 'space-evenly',
    backgroundColor: 'white'
  },
  like_button: {
    color: 'blue'
  },
  stats: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    width: '100%',
    justifyContent: 'space-evenly'
  }
});
