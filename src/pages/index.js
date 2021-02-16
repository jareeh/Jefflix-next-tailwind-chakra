import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/core';

import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Home() {
  // Handling Chakra Modal options
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push('/home');
  }

  return (
    <div className="h-screen bg-white">
      <div className="p-4 bg-white text-black flex justify-center text-center pt-3">
        <div
          className="flex flex-col p-3 w-sm max-w-sm h-32 shadow-md rounded-md hover:shadow-xl hover:rounded-xl transition duration-200 ease-in-out cursor-pointer"
          onClick={() => onOpen()}
        >
          <p className="text-3xl">Click to enter app</p>
        </div>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Jeff is Learning the Tech Stack</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <p>Either close this modal or click to enter the Jefflix App.</p>
            </ModalBody>

            <ModalFooter>
              <Button variantColor="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variantColor="red" mr={3} onClick={handleClick}>
                Enter App
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
}
