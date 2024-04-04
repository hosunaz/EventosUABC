import {useState} from 'react';
import {
    Grid,
    GridItem,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    FormLabel,
    Input,
    FormControl,
    Select,
} from "@chakra-ui/react";
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

const FormatoSolicitud2 = () => {
  const [value, onChange] = useState(new Date());
  const [value2, onChange2] = useState(new Date());

  return (
    <Grid templateColumns={"1fr 1fr"} gap={4}>
        <GridItem> 
            <FormControl height="93px" isRequired>
                <GridItem> 
                    <FormLabel>Capacidad</FormLabel>
                    <NumberInput defaultValue={50} min={10} max={200}>
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </GridItem>
            </FormControl>
            <FormControl height="93px">
                <FormLabel>Estado</FormLabel>
                <Input value="Pendiente" isReadOnly/>
            </FormControl>
            <FormControl height="93px" isRequired>
                <FormLabel>Tipo de evento</FormLabel>
                <Select placeholder="Categoria">
                    <option>General</option>
                    <option>Para estudiantes</option>
                    <option>Propedeutico</option>
                    <option>Conferencia</option>
                </Select>
            </FormControl>
        </GridItem>

        <GridItem>
            <FormControl height="93px">
                <FormLabel>Co-Responsable</FormLabel>
                <Input placeholder="Co-responsable" />
            </FormControl>

            <FormControl height="93px" isRequired>
                <FormLabel>Hora inicio</FormLabel>
                <DateTimePicker format={'HH:mm:ss'} onChange={onChange} value={value} disableCalendar />
            </FormControl>

            <FormControl height="93px" isRequired>
                <FormLabel>Hora fin</FormLabel>
                <DateTimePicker format={'HH:mm:ss'} onChange={onChange2} value={value2} disableCalendar	/>
            </FormControl>
        </GridItem>
    </Grid>
);};
export default FormatoSolicitud2;
