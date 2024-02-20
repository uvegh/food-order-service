import { View } from "@/components/Themed";
import { Link, Tabs } from "expo-router"
import { Image, Pressable } from "react-native";

export default()=>{
 
  const bellIcon = require("../images/Notification.png");
  const homeIcon = require("../images/home.png");
  const cart = require("../images/Buy.png");
  const likeIcon = require("../images/like.png");
  const exploreIcon = require("../images/Discovery.png");
  const locationIcon = require("../images/Location.png");
  const ordersIcon = require("../images/doc.png");
  const userIcon = require("../images/Profile.png");

  return<Tabs>
    <Tabs.Screen  name="Home"
    options={{
      tabBarIcon: ({ color }) => <Image source={homeIcon} />,
      headerTitle:"The Grover Estate, Ikoyi, Lagos",
      headerTitleStyle:{
fontSize:15,
fontWeight:'semibold',
color:"#6B6C6C",


      },
      headerRight: () => (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Link href="/modal" asChild>
            <Pressable>
              {({ pressed }) => (
                <>
                  <Image
                    source={bellIcon}
                    style={{
                      marginRight: 15,
                      opacity: pressed ? 0.5 : 1,
                    }}
                  />

                
                </>
              )}
            </Pressable>
          </Link>

          <Link href="/modal" asChild>
            <Pressable>
              {({ pressed }) => (
                <>
                  <Image
                    source={cart}
                    style={{
                      marginRight: 15,
                      opacity: pressed ? 0.5 : 1,
                    }}
                  />

                 
                </>
              )}
            </Pressable>
          </Link>

          
        </View>
      ),

    }}
    />
<Tabs.Screen  name="Explore"
options={{
  tabBarIcon: ({ color }) => <Image source={exploreIcon} />,
}}
/>
<Tabs.Screen  name="Orders"
options={{
  tabBarIcon: ({ color }) => <Image source={ordersIcon} />,
}}
/>
<Tabs.Screen  name="Favorites"
options={{
  tabBarIcon: ({ color }) => <Image source={likeIcon} />,
}}
/>

<Tabs.Screen  name="Account"
options={{
  tabBarIcon: ({ color }) => <Image source={userIcon} />,
}}
/>





  </Tabs>
}


