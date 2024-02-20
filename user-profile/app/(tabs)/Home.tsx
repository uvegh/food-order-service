import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const filterIcon = require("../images/Filter.png");
  const searchIcon = require("../images/Search.png");
  const card1 = require("../images/Card.png");
  const food1 = require("../images/food1.png");
  const food2 = require("../images/food2.png");
  const star = require("../images/Star.png");
  const like = require("../images/like2.png");
  const food3=require('../images/food3.png')
  const food4=require('../images/food4.png')
  const food5=require('../images/food5.png')
  const food6=require('../images/food6.png')
  const resturant=require('../images/resturant.png')
  const phone=require('../images/phone.png')


  
  return (
    <SafeAreaView>
      <ScrollView className="mx-auto p-2">
        <View>
        <View className="mx-auto p-1">
          <Text className="font-bold text-xl">
            What dish would you like to order today?
          </Text>

          <View className="flex-row gap-x-2 mt-4">
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderColor: "#888989",
                borderWidth: 1,
                borderRadius: 8,
                width: "83%",
              }}
            >
              <Image
                source={searchIcon}
                style={{ marginLeft: 10, marginRight: 5 }}
              />
              <TextInput
                style={{ flex: 1, height: 40 }}
                placeholder="Search here"
              />
            </View>
            <Image source={filterIcon} />
          </View>


          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={true}
            contentContainerStyle={{
              overflow: "scroll",
              flexDirection: "row",
              gap: 8,
            }}
            className="mt-5"
          >
            <Pressable>
              <Image source={card1} />
            </Pressable>

            <Image source={card1} />
            <Image source={card1} />
          </ScrollView>


{/* trending today */}
          <View className="flex-row justify-between mt-5">
<Text className="font-bold text-xl">
            Trending Today 
          </Text>

          <Text className="font-extrabold text-sm text-[#009688]">
         See all
          </Text>
</View>

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              overflow: "scroll",
              flexDirection: "row",
              gap: 14,
            }}
            className="mt-5"
          >
            <Pressable>
              <View
                style={{
                  backgroundColor: "#F9F9F9",
                  minWidth: 149,
                  padding: 10,
                }}
              >
                <View className="flex-row justify-center">
                  <Image
                    source={food1}
                    style={{
                      margin: "auto",
                      alignSelf: "center",
                    }}
                  />

                  <Image source={like} className="text-end ms-4" />
                </View>

                <Text
                  style={{
                    color: "#3D4040",
                    textAlign: "center",
                    borderRadius: 10,
                    minHeight: 50,
                    fontSize: 12,
                    fontWeight: "400",
                    marginTop: 5,
                  }}
                >
                  Jollof Rice and Beef
                </Text>
                <View className="flex-row justify-between">
                  <Text className="font-bold">750</Text>
                  <Text className="font-bold text-[#009688]">
                    <Image source={star} /> 4.5
                  </Text>
                </View>
              </View>
            </Pressable>

            <Pressable>
              <View
                style={{
                  backgroundColor: "#F9F9F9",
                  minWidth: 149,
                  padding: 10,
                }}
              >
                <View className="flex-row justify-center">
                  <Image
                    source={food2}
                    style={{
                      margin: "auto",
                      alignSelf: "center",
                    }}
                  />

                  <Image source={like} className="text-end ms-4" />
                </View>

                <Text
                  style={{
                    color: "#3D4040",
                    textAlign: "center",
                    borderRadius: 10,
                    minHeight: 50,
                    fontSize: 12,
                    fontWeight: "400",
                    marginTop: 5,
                  }}
                >
                  Jollof Rice and Beef
                </Text>
                <View className="flex-row justify-between">
                  <Text className="font-bold">750</Text>
                  <Text className="font-bold text-[#009688]">
                    <Image source={star} /> 4.5
                  </Text>
                </View>
              </View>
            </Pressable>

            <Pressable>
              <View
                style={{
                  backgroundColor: "#F9F9F9",
                  minWidth: 149,
                  padding: 10,
                }}
              >
                <View className="flex-row justify-center">
                  <Image
                    source={food1}
                    style={{
                      margin: "auto",
                      alignSelf: "center",
                    }}
                  />

                  <Image source={like} className="text-end ms-4" />
                </View>

                <Text
                  style={{
                    color: "#3D4040",
                    textAlign: "center",
                    borderRadius: 10,
                    minHeight: 50,
                    fontSize: 12,
                    fontWeight: "400",
                    marginTop: 5,
                  }}
                >
                  Jollof Rice and Beef
                </Text>
                <View className="flex-row justify-between">
                  <Text className="font-bold">750</Text>
                  <Text className="font-bold text-[#009688]">
                    <Image source={star} /> 4.5
                  </Text>
                </View>
              </View>
            </Pressable>

            <Pressable>
              <View
                style={{
                  backgroundColor: "#F9F9F9",
                  minWidth: 149,
                  padding: 10,
                }}
              >
                <View className="flex-row justify-center">
                  <Image
                    source={food1}
                    style={{
                      margin: "auto",
                      alignSelf: "center",
                    }}
                  />

                  <Image source={like} className="text-end ms-4" />
                </View>

                <Text
                  style={{
                    color: "#3D4040",
                    textAlign: "center",
                    borderRadius: 10,
                    minHeight: 50,
                    fontSize: 12,
                    fontWeight: "400",
                    marginTop: 5,
                  }}
                >
                  Jollof Rice and Beef
                </Text>
                <View className="flex-row justify-between">
                  <Text className="font-bold">750</Text>
                  <Text className="font-bold text-[#009688]">
                    <Image source={star} /> 4.5
                  </Text>
                </View>
              </View>
            </Pressable>
          </ScrollView>


          {/* under 1000naira */}

          <View className="flex-row justify-start mt-5 relative">
<Text className="font-bold text-xl">
Under ₦1,000
          </Text>

          
          <Image source={phone} className="absolute left-[77%] z-10 top-8"/>
</View>



          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              overflow: "scroll",
              flexDirection: "row",
              gap: 14,
            }}
            className="mt-5 relative"
          >
            
            <Pressable>
              <View
                style={{
                 
                  minWidth: 149,
                  padding: 10,
                }}
              >
                <View className="">
                  <Image
                    source={food3}
                    style={{
                      margin: "auto",
                      alignSelf: "center",
                    }}
                  />

                
                </View>

                <Text
                  style={{
                    color: "#3D4040",
                    textAlign: "left",
                    borderRadius: 10,
                    minHeight: 50,
                    fontSize: 12,
                    fontWeight: "400",
                    marginTop: 5,
                  }}
                >
                  Jollof Rice and Beef
                </Text>
                <View className="flex-row justify-between">
                  <Text className="font-bold">₦950</Text>
                  <Text className="font-bold text-[#009688]">
                    <Image source={star} /> 4.5
                  </Text>
                </View>
              </View>
            </Pressable>

              <Pressable>
              <View
                style={{
                 
                  minWidth: 149,
                  padding: 10,
                }}
              >
                <View className="">
                  <Image
                    source={food4}
                    style={{
                      margin: "auto",
                      alignSelf: "center",
                    }}
                  />

                
                </View>

                <Text
                  style={{
                    color: "#3D4040",
                    textAlign: "left",
                    borderRadius: 10,
                    minHeight: 50,
                    fontSize: 12,
                    fontWeight: "400",
                    marginTop: 5,
                  }}
                >
                  Hamburger
                </Text>
                <View className="flex-row justify-between">
                  <Text className="font-bold">₦950</Text>
                  <Text className="font-bold text-[#009688]">
                    <Image source={star} /> 4.5
                  </Text>
                </View>
              </View>
            </Pressable>
            

            <Pressable>
              <View
                style={{
                 
                  minWidth: 149,
                  padding: 10,
                }}
              >
                <View className="">
                  <Image
                    source={food3}
                    style={{
                      margin: "auto",
                      alignSelf: "center",
                    }}
                  />

                
                </View>

                <Text
                  style={{
                    color: "#3D4040",
                    textAlign: "left",
                    borderRadius: 10,
                    minHeight: 50,
                    fontSize: 12,
                    fontWeight: "400",
                    marginTop: 5,
                  }}
                >
                  Jollof Rice and Beef
                </Text>
                <View className="flex-row justify-between">
                  <Text className="font-bold">₦950</Text>
                  <Text className="font-bold text-[#009688]">
                    <Image source={star} /> 4.5
                  </Text>
                </View>
              </View>
            </Pressable>

            <Pressable>
              <View
                style={{
                 
                  minWidth: 149,
                  padding: 10,
                }}
              >
                <View className="">
                  <Image
                    source={food3}
                    style={{
                      margin: "auto",
                      alignSelf: "center",
                    }}
                  />

                
                </View>

                <Text
                  style={{
                    color: "#3D4040",
                    textAlign: "left",
                    borderRadius: 10,
                    minHeight: 50,
                    fontSize: 12,
                    fontWeight: "400",
                    marginTop: 5,
                  }}
                >
                  Jollof Rice and Beef
                </Text>
                <View className="flex-row justify-between">
                  <Text className="font-bold">₦950</Text>
                  <Text className="font-bold text-[#009688]">
                    <Image source={star} /> 4.5
                  </Text>
                </View>
              </View>
            </Pressable>


          
          </ScrollView>
          </View>
        

{/* recommended for you */}
<View className="flex-row justify-between mt-5">
<Text className="font-bold text-xl">
Recommended for you 
          </Text>

          <Text className="font-extrabold text-sm text-[#009688]">
         See all
          </Text>
</View>
</View>

<View className="flex-row justify-between bg-[#F9F9F9] p-5 rounded-lg mt-5">
<View className="flex-row gap-x-4">
<View >
  <Image  source={food5}/>
 
</View>

<View className="flex-col align-middle  ">

<Text>
Fried Chicken
</Text>
<Text className="font-bold text-[#000]">
₦1,000
                  </Text>
</View>


</View>
<View className="flex-col align-middle  ">
<Image source={like} className="text-end ms-4" />
<Text className="font-bold text-[#009688]">
                    <Image source={star} /> 4.5
                  </Text>
</View>

</View>


<View className="flex-row justify-between bg-[#F9F9F9] p-5 rounded-lg mt-5">
<View className="flex-row gap-x-4">
<View >
  <Image  source={food6}/>
 
</View>

<View className="flex-col align-middle  ">

<Text>
Fried Chicken
</Text>
<Text className="font-bold text-[#000]">
₦1,000
                  </Text>
</View>


</View>
<View className="flex-col align-middle  ">
<Image source={like} className="text-end ms-4" />
<Text className="font-bold text-[#009688]">
                    <Image source={star} /> 4.5
                  </Text>
</View>

</View>

{/* offers */}
<View className="flex-row justify-between mt-5">
<Text className="font-bold text-xl">
            Offer 
          </Text>

          <Text className="font-extrabold text-sm text-[#009688]">
         See all
          </Text>
</View>

<ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              overflow: "scroll",
              flexDirection: "row",
              gap: 14,
            }}
            className="mt-5 relative"
          >
            <Pressable>
              <View
                style={{
                 
                  minWidth: 149,
                  padding: 10,
                }}
              >
                <View className="">
                  <Image
                    source={food3}
                    style={{
                      margin: "auto",
                      alignSelf: "center",
                    }}
                  />

                
                </View>

                <Text
                  style={{
                    color: "#3D4040",
                    textAlign: "left",
                    borderRadius: 10,
                    minHeight: 50,
                    fontSize: 12,
                    fontWeight: "400",
                    marginTop: 5,
                  }}
                >
                  Jollof Rice and Beef
                </Text>
                <View className="flex-row justify-between">
                  <Text className="font-bold">₦950</Text>
                  <Text className="font-bold text-[#009688]">
                    <Image source={star} /> 4.5
                  </Text>
                </View>
              </View>
            </Pressable>

              <Pressable>
              <View
                style={{
                 
                  minWidth: 149,
                  padding: 10,
                }}
              >
                <View className="">
                  <Image
                    source={food4}
                    style={{
                      margin: "auto",
                      alignSelf: "center",
                    }}
                  />

                
                </View>

                <Text
                  style={{
                    color: "#3D4040",
                    textAlign: "left",
                    borderRadius: 10,
                    minHeight: 50,
                    fontSize: 12,
                    fontWeight: "400",
                    marginTop: 5,
                  }}
                >
                  Hamburger
                </Text>
                <View className="flex-row justify-between">
                  <Text className="font-bold">₦950</Text>
                  <Text className="font-bold text-[#009688]">
                    <Image source={star} /> 4.5
                  </Text>
                </View>
              </View>
            </Pressable>
            

            <Pressable>
              <View
                style={{
                 
                  minWidth: 149,
                  padding: 10,
                }}
              >
                <View className="">
                  <Image
                    source={food3}
                    style={{
                      margin: "auto",
                      alignSelf: "center",
                    }}
                  />

                
                </View>

                <Text
                  style={{
                    color: "#3D4040",
                    textAlign: "left",
                    borderRadius: 10,
                    minHeight: 50,
                    fontSize: 12,
                    fontWeight: "400",
                    marginTop: 5,
                  }}
                >
                  Jollof Rice and Beef
                </Text>
                <View className="flex-row justify-between">
                  <Text className="font-bold">₦950</Text>
                  <Text className="font-bold text-[#009688]">
                    <Image source={star} /> 4.5
                  </Text>
                </View>
              </View>
            </Pressable>

            <Pressable>
              <View
                style={{
                 
                  minWidth: 149,
                  padding: 10,
                }}
              >
                <View className="">
                  <Image
                    source={food3}
                    style={{
                      margin: "auto",
                      alignSelf: "center",
                    }}
                  />

                
                </View>

                <Text
                  style={{
                    color: "#3D4040",
                    textAlign: "left",
                    borderRadius: 10,
                    minHeight: 50,
                    fontSize: 12,
                    fontWeight: "400",
                    marginTop: 5,
                  }}
                >
                  Jollof Rice and Beef
                </Text>
                <View className="flex-row justify-between">
                  <Text className="font-bold">₦950</Text>
                  <Text className="font-bold text-[#009688]">
                    <Image source={star} /> 4.5
                  </Text>
                </View>
              </View>
            </Pressable>


          
          </ScrollView>
{/* resturants near you */}
          <View className="flex-row justify-between mt-5">
<Text className="font-bold text-xl">
Resturants Near You  
          </Text>

          <Text className="font-extrabold text-sm text-[#009688]">
         See all
          </Text>
</View>

<ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              overflow: "scroll",
              flexDirection: "row",
              gap: 14,
            }}
            className="mt-5"
          >
            <Pressable>
              <View
                style={{
                  backgroundColor: "#F9F9F9",
                  minWidth: 149,
                  padding: 10,
                }}
              >
                <View className="flex-row justify-center">
                  <Image
                    source={resturant}
                    style={{
                      margin: "auto",
                      alignSelf: "center",
                    }}
                  />

                  <Image source={like} className="text-end ms-4" />
                </View>

              
              </View>
            </Pressable>

            <Pressable>
              <View
                style={{
                  backgroundColor: "#F9F9F9",
                  minWidth: 149,
                  padding: 10,
                }}
              >
                <View className="flex-row justify-center">
                  <Image
                    source={resturant}
                    style={{
                      margin: "auto",
                      alignSelf: "center",
                    }}
                  />

                  <Image source={like} className="text-end ms-4" />
                </View>

              
              </View>
            </Pressable>
          </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
