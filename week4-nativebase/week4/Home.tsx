import React, { setState, Component } from 'react';
import { Text, Heading, FlatList, Center, VStack, HStack, Input, Button, Slider, Checkbox, Divider } from 'native-base'

interface HomeState {
    todo: list,
    newItemName?: string,
}

class Home extends Component {

    state: HomeState = {
        todo: ["Week 2 Assignment", "Week 3 Assignment", "Stay Hydrated"],    // The list
        newItemName: "",    // The input cache
    }

    render() {
        return (
            <Center flex={1} w="100%" p="10" h="100%" justifyContent="center" alignItems="center" pt="100">
                <Heading>Week 4: ToDo</Heading>

                <Input value={this.state.newItemName} onChangeText={newItemName => this.setState({ newItemName })} placeholder="輸入代辦" mt="10" mb="5" />
                <Button mb="10" onPress={() => this.addItem()}>Add +</Button>

                <HStack w="100%">
                    <Text w="33%" textAlign="left">!!!</Text>
                    <Text w="33%" textAlign="center">!!</Text>
                    <Text w="33%" textAlign="right">!</Text>
                </HStack>

                <Slider defaultValue={1} minValue={0} maxValue={2} step={1}>
                    <Slider.Track>
                        <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                </Slider>

                <Divider my="10" h="0.5" />

                <FlatList data={this.state.todo} renderItem={this.renderItem} w="100%" />
            </Center>
        )
    }

    //  Append the new item to the state.todo list, then force update the render
    //  This is called whenever the onPress event of the Add button is fired
    addItem() {
        if (this.state.newItemName.length == 0) return

        this.state.todo.push(this.state.newItemName)
        this.state.newItemName = ""
        this.forceUpdate()
    }

    //  Render each item in state.todo
    //  This automatically maps the values to a checkbox view
    renderItem({item}: string) {
        return (
            <Checkbox value="0" mb="2">{item}</Checkbox>
        )
    }
}


export default Home
