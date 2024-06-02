import {Link} from 'react-router-dom';
import {useAuth} from '../context/AuthContext';
import {Flex, Box, Button} from '@chakra-ui/react';


const Navbar = () => {
    const {authState, logout} = useAuth();

    return (
        <Flex as="nav">
            <Box>
                {authState.isAuthanticated? }
            </Box>
        </Flex>
    )
}