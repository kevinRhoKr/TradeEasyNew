import React from "react";
import { Text, View, Button } from "react-native";

import * as TalkRn from "@talkjs/expo";

export function Chat({ route, navigation }) {
  const { me1, other1 } = route.params;

  function ChatComponent() {
    const me = {
      id: me1.email,
      name: me1.name,
      email: me1.email,
      role: "default",
    };

    const other = {
      id: other1.email,
      name: other1.name,
      email: other1.email,
      role: "default",
    };

    const conversationBuilder = TalkRn.getConversationBuilder(
      TalkRn.oneOnOneId(me, other)
    );

    conversationBuilder.setParticipant(me);
    conversationBuilder.setParticipant(other);

    return (
      <TalkRn.Session appId="tfrCAhli" me={me}>
        <TalkRn.Chatbox conversationBuilder={conversationBuilder} />
      </TalkRn.Session>
    );
  }

  return (
    // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //   <Text>Chats!</Text>
    //   <Button
    //     onPress={() => {
    //       props.navigation.navigate("ChatList");
    //     }}
    //     title="Go Back"
    //   ></Button>
    // </View>
    <ChatComponent></ChatComponent>
  );
}
