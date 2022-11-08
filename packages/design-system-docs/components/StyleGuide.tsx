import { AtSignIcon } from "@chakra-ui/icons";
// import * as ICONS from '../imports';
import {
  mdiCancel,
  mdiCheck,
  mdiChevronDown,
  mdiChevronLeft,
  mdiChevronRight,
  mdiDotsGrid,
  mdiDotsHorizontal,
  mdiDragVertical,
  mdiEmoticonCoolOutline,
  mdiLockOutline,
  mdiMagnify,
  mdiPencilOutline,
  mdiPlus,
  mdiStarOutline,
  mdiTrashCanOutline,
} from "@mdi/js";

import {
  Alert,
  AlertIcon,
  AlertTitle,
  Avatar,
  Badge,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  ButtonGroup,
  Checkbox,
  CheckboxGroup,
  CircularProgress,
  CloseButton,
  Code,
  Container,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Radio,
  RadioGroup,
  Select,
  Skeleton,
  Spinner,
  Stack,
  Switch,
  Tab,
  Table,
  TableContainer,
  TabList,
  Tabs,
  Tag,
  Tbody,
  Td,
  Text,
  Textarea,
  Th,
  Thead,
  Tooltip,
  Tr,
  useDisclosure,
  Wrap,
} from "@chakra-ui/react";

import { LoremIpsum } from "react-lorem-ipsum";

import { useColorMode, useColorModeValue } from "@chakra-ui/system";
import { useEffect, useRef, useState } from "react";

const useWidth = () => {
  const [width, setWidth] = useState(0); // default width, detect on server.
  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);
  return width;
};

export const StyleGuide = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { toggleColorMode } = useColorMode();
  const containerRef = useRef<HTMLDivElement>(null);
  const windowWidth = useWidth();
  const [containerWidth, setContainerWidth] = useState<number | null>(null);

  useEffect(() => {
    if (containerRef?.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, [windowWidth]);

  return (
    <Box
      id="component"
      as={Container}
      ref={containerRef}
      px="10"
      pt="9"
      pb="12"
      flex="1"
      maxW="8xl"
    >
      <Alert mb="10" status="error">
        <AlertIcon />
        <AlertTitle>
          {/* This document is a work in progress. Not all styles are correct. */}
          <Heading as="h6">{`${containerWidth}px`}</Heading>
        </AlertTitle>
      </Alert>
      <Flex justifyContent="space-between">
        <Heading mb="10">Components</Heading>
        <Tooltip label="Dark Mode">
          <IconButton
            onClick={toggleColorMode}
            aria-label="this is required"
            variant="subtle"
            color={useColorModeValue("blackAlpha.400", "whiteAlpha.400")}
            icon={
              <Icon boxSize="6">
                <path fill="currentColor" d={mdiEmoticonCoolOutline} />
              </Icon>
            }
          />
        </Tooltip>
      </Flex>
      <Stack spacing="6">
        <Box p="12">
          <Heading size="lg" mb="10" pt="12" mt="-12" id="button">
            <Link href="#button">Button</Link>
          </Heading>
          <Stack spacing="8">
            <Wrap align="center">
              <Button variant="primary" size="lg">
                Primary
              </Button>
              <Button variant="primary">Primary</Button>
              <Button variant="primary" size="sm">
                Primary
              </Button>
              <Button variant="primary" size="xs">
                Primary
              </Button>
            </Wrap>
            <Wrap align="center">
              <Button
                leftIcon={
                  <Icon boxSize="6">
                    <path fill="currentColor" d={mdiStarOutline} />
                  </Icon>
                }
                variant="primary"
                size="lg"
              >
                Primary
              </Button>
              <Button
                leftIcon={
                  <Icon boxSize="6">
                    <path fill="currentColor" d={mdiStarOutline} />
                  </Icon>
                }
                variant="primary"
              >
                Primary
              </Button>
              <Button
                leftIcon={
                  <Icon boxSize="6">
                    <path fill="currentColor" d={mdiStarOutline} />
                  </Icon>
                }
                variant="primary"
                size="sm"
              >
                Primary
              </Button>
              <Button
                leftIcon={
                  <Icon boxSize="4.5">
                    <path fill="currentColor" d={mdiStarOutline} />
                  </Icon>
                }
                variant="primary"
                size="xs"
              >
                Primary
              </Button>
            </Wrap>
            <Wrap align="center">
              <Button
                rightIcon={
                  <Icon boxSize="6">
                    <path fill="currentColor" d={mdiChevronDown} />
                  </Icon>
                }
                variant="primary"
                size="lg"
              >
                Primary
              </Button>
              <Button
                rightIcon={
                  <Icon boxSize="6">
                    <path fill="currentColor" d={mdiChevronDown} />
                  </Icon>
                }
                variant="primary"
              >
                Primary
              </Button>
              <Button
                rightIcon={
                  <Icon boxSize="6">
                    <path fill="currentColor" d={mdiChevronDown} />
                  </Icon>
                }
                variant="primary"
                size="sm"
              >
                Primary
              </Button>
              <Button
                rightIcon={
                  <Icon boxSize="4.5">
                    <path fill="currentColor" d={mdiChevronDown} />
                  </Icon>
                }
                variant="primary"
                size="xs"
              >
                Primary
              </Button>
            </Wrap>
            <Wrap align="center">
              <Button variant="secondary" size="lg">
                Secondary
              </Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="secondary" size="sm">
                Secondary
              </Button>
              <Button variant="secondary" size="xs">
                Secondary
              </Button>
            </Wrap>
            <Wrap align="center">
              <Button
                leftIcon={
                  <Icon boxSize="6">
                    <path fill="currentColor" d={mdiStarOutline} />
                  </Icon>
                }
                variant="secondary"
                size="lg"
              >
                Secondary
              </Button>
              <Button
                leftIcon={
                  <Icon boxSize="6">
                    <path fill="currentColor" d={mdiStarOutline} />
                  </Icon>
                }
                variant="secondary"
              >
                Secondary
              </Button>
              <Button
                leftIcon={
                  <Icon boxSize="6">
                    <path fill="currentColor" d={mdiStarOutline} />
                  </Icon>
                }
                variant="secondary"
                size="sm"
              >
                Secondary
              </Button>
              <Button
                leftIcon={
                  <Icon boxSize="4.5">
                    <path fill="currentColor" d={mdiStarOutline} />
                  </Icon>
                }
                variant="secondary"
                size="xs"
              >
                Secondary
              </Button>
            </Wrap>
            <Wrap align="center">
              <Button
                rightIcon={
                  <Icon boxSize="6">
                    <path fill="currentColor" d={mdiChevronDown} />
                  </Icon>
                }
                variant="secondary"
                size="lg"
              >
                Secondary
              </Button>
              <Button
                rightIcon={
                  <Icon boxSize="6">
                    <path fill="currentColor" d={mdiChevronDown} />
                  </Icon>
                }
                variant="secondary"
              >
                Secondary
              </Button>
              <Button
                rightIcon={
                  <Icon boxSize="6">
                    <path fill="currentColor" d={mdiChevronDown} />
                  </Icon>
                }
                variant="secondary"
                size="sm"
              >
                Secondary
              </Button>
              <Button
                rightIcon={
                  <Icon boxSize="4.5">
                    <path fill="currentColor" d={mdiChevronDown} />
                  </Icon>
                }
                variant="secondary"
                size="xs"
              >
                Secondary
              </Button>
            </Wrap>
            <Wrap align="center">
              <Button variant="subtle" size="lg">
                Subtle
              </Button>
              <Button variant="subtle">Subtle</Button>
              <Button variant="subtle" size="sm">
                Subtle
              </Button>
              <Button variant="subtle" size="xs">
                Subtle
              </Button>
            </Wrap>
            <Wrap align="center">
              <Button
                leftIcon={
                  <Icon boxSize="6">
                    <path fill="currentColor" d={mdiStarOutline} />
                  </Icon>
                }
                variant="subtle"
                size="lg"
              >
                Subtle
              </Button>
              <Button
                leftIcon={
                  <Icon boxSize="6">
                    <path fill="currentColor" d={mdiStarOutline} />
                  </Icon>
                }
                variant="subtle"
              >
                Subtle
              </Button>
              <Button
                leftIcon={
                  <Icon boxSize="6">
                    <path fill="currentColor" d={mdiStarOutline} />
                  </Icon>
                }
                variant="subtle"
                size="sm"
              >
                Subtle
              </Button>
              <Button
                leftIcon={
                  <Icon boxSize="4.5">
                    <path fill="currentColor" d={mdiStarOutline} />
                  </Icon>
                }
                variant="subtle"
                size="xs"
              >
                Subtle
              </Button>
            </Wrap>
            <Wrap align="center">
              <Button
                rightIcon={
                  <Icon boxSize="6">
                    <path fill="currentColor" d={mdiChevronDown} />
                  </Icon>
                }
                variant="subtle"
                size="lg"
              >
                Subtle
              </Button>
              <Button
                rightIcon={
                  <Icon boxSize="6">
                    <path fill="currentColor" d={mdiChevronDown} />
                  </Icon>
                }
                variant="subtle"
              >
                Subtle
              </Button>
              <Button
                rightIcon={
                  <Icon boxSize="6">
                    <path fill="currentColor" d={mdiChevronDown} />
                  </Icon>
                }
                variant="subtle"
                size="sm"
              >
                Subtle
              </Button>
              <Button
                rightIcon={
                  <Icon boxSize="4.5">
                    <path fill="currentColor" d={mdiChevronDown} />
                  </Icon>
                }
                variant="subtle"
                size="xs"
              >
                Subtle
              </Button>
            </Wrap>
            <Wrap align="center">
              <Button variant="minimal" size="lg">
                Minimal
              </Button>
              <Button variant="minimal">Minimal</Button>
              <Button variant="minimal" size="sm">
                Minimal
              </Button>
              <Button variant="minimal" size="xs">
                Minimal
              </Button>
            </Wrap>
            <Wrap align="center">
              <Button
                leftIcon={
                  <Icon boxSize="6">
                    <path fill="currentColor" d={mdiStarOutline} />
                  </Icon>
                }
                variant="minimal"
                size="lg"
              >
                Minimal
              </Button>
              <Button
                leftIcon={
                  <Icon boxSize="6">
                    <path fill="currentColor" d={mdiStarOutline} />
                  </Icon>
                }
                variant="minimal"
              >
                Minimal
              </Button>
              <Button
                leftIcon={
                  <Icon boxSize="6">
                    <path fill="currentColor" d={mdiStarOutline} />
                  </Icon>
                }
                variant="minimal"
                size="sm"
              >
                Minimal
              </Button>
              <Button
                leftIcon={
                  <Icon boxSize="4.5">
                    <path fill="currentColor" d={mdiStarOutline} />
                  </Icon>
                }
                variant="minimal"
                size="xs"
              >
                Minimal
              </Button>
            </Wrap>
            <Wrap align="center">
              <Button
                rightIcon={
                  <Icon boxSize="6">
                    <path fill="currentColor" d={mdiChevronDown} />
                  </Icon>
                }
                variant="minimal"
                size="lg"
              >
                Minimal
              </Button>
              <Button
                rightIcon={
                  <Icon boxSize="6">
                    <path fill="currentColor" d={mdiChevronDown} />
                  </Icon>
                }
                variant="minimal"
              >
                Minimal
              </Button>
              <Button
                rightIcon={
                  <Icon boxSize="6">
                    <path fill="currentColor" d={mdiChevronDown} />
                  </Icon>
                }
                variant="minimal"
                size="sm"
              >
                Minimal
              </Button>
              <Button
                rightIcon={
                  <Icon boxSize="4.5">
                    <path fill="currentColor" d={mdiChevronDown} />
                  </Icon>
                }
                variant="minimal"
                size="xs"
              >
                Minimal
              </Button>
            </Wrap>
            <Wrap align="center">
              <Button variant="link" size="lg">
                Link
              </Button>
              <Button variant="link">Link</Button>
              <Button variant="link" size="sm">
                Link
              </Button>
              <Button variant="link" size="xs">
                Link
              </Button>
            </Wrap>
            <Wrap align="center">
              <Button colorScheme="blackAlpha" size="lg">
                Dark
              </Button>
              <Button colorScheme="blackAlpha">Dark</Button>
              <Button colorScheme="blackAlpha" size="sm">
                Dark
              </Button>
              <Button colorScheme="blackAlpha" size="xs">
                Dark
              </Button>
            </Wrap>
            <Wrap align="center">
              <Button
                leftIcon={
                  <Icon boxSize="6">
                    <path fill="currentColor" d={mdiStarOutline} />
                  </Icon>
                }
                colorScheme="blackAlpha"
                size="lg"
              >
                Dark
              </Button>
              <Button
                leftIcon={
                  <Icon boxSize="6">
                    <path fill="currentColor" d={mdiStarOutline} />
                  </Icon>
                }
                colorScheme="blackAlpha"
              >
                Dark
              </Button>
              <Button
                leftIcon={
                  <Icon boxSize="6">
                    <path fill="currentColor" d={mdiStarOutline} />
                  </Icon>
                }
                colorScheme="blackAlpha"
                size="sm"
              >
                Dark
              </Button>
              <Button
                leftIcon={
                  <Icon boxSize="4.5">
                    <path fill="currentColor" d={mdiStarOutline} />
                  </Icon>
                }
                colorScheme="blackAlpha"
                size="xs"
              >
                Dark
              </Button>
            </Wrap>
            <Wrap align="center">
              <Button
                rightIcon={
                  <Icon boxSize="6">
                    <path fill="currentColor" d={mdiChevronDown} />
                  </Icon>
                }
                colorScheme="blackAlpha"
                size="lg"
              >
                Dark
              </Button>
              <Button
                rightIcon={
                  <Icon boxSize="6">
                    <path fill="currentColor" d={mdiChevronDown} />
                  </Icon>
                }
                colorScheme="blackAlpha"
              >
                Dark
              </Button>
              <Button
                rightIcon={
                  <Icon boxSize="6">
                    <path fill="currentColor" d={mdiChevronDown} />
                  </Icon>
                }
                colorScheme="blackAlpha"
                size="sm"
              >
                Dark
              </Button>
              <Button
                rightIcon={
                  <Icon boxSize="4.5">
                    <path fill="currentColor" d={mdiChevronDown} />
                  </Icon>
                }
                colorScheme="blackAlpha"
                size="xs"
              >
                Dark
              </Button>
            </Wrap>
            <Wrap align="center">
              <Button colorScheme="teal" size="lg">
                Positive
              </Button>
              <Button colorScheme="teal">Positive</Button>
              <Button colorScheme="teal" size="sm">
                Positive
              </Button>
              <Button colorScheme="teal" size="xs">
                Positive
              </Button>
            </Wrap>
            <Wrap align="center">
              <Button
                leftIcon={
                  <Icon boxSize="6">
                    <path fill="currentColor" d={mdiCheck} />
                  </Icon>
                }
                colorScheme="teal"
                size="lg"
              >
                Positive
              </Button>
              <Button
                leftIcon={
                  <Icon boxSize="6">
                    <path fill="currentColor" d={mdiCheck} />
                  </Icon>
                }
                colorScheme="teal"
              >
                Positive
              </Button>
              <Button
                leftIcon={
                  <Icon boxSize="6">
                    <path fill="currentColor" d={mdiCheck} />
                  </Icon>
                }
                colorScheme="teal"
                size="sm"
              >
                Positive
              </Button>
              <Button
                leftIcon={
                  <Icon boxSize="4.5">
                    <path fill="currentColor" d={mdiCheck} />
                  </Icon>
                }
                colorScheme="teal"
                size="xs"
              >
                Positive
              </Button>
            </Wrap>
            <Wrap align="center">
              <Button colorScheme="red" size="lg">
                Danger
              </Button>
              <Button colorScheme="red">Danger</Button>
              <Button colorScheme="red" size="sm">
                Danger
              </Button>
              <Button colorScheme="red" size="xs">
                Danger
              </Button>
            </Wrap>
            <Wrap align="center">
              <Button
                leftIcon={
                  <Icon boxSize="6">
                    <path fill="currentColor" d={mdiTrashCanOutline} />
                  </Icon>
                }
                colorScheme="red"
                size="lg"
              >
                Danger
              </Button>
              <Button
                leftIcon={
                  <Icon boxSize="6">
                    <path fill="currentColor" d={mdiTrashCanOutline} />
                  </Icon>
                }
                colorScheme="red"
              >
                Danger
              </Button>
              <Button
                leftIcon={
                  <Icon boxSize="6">
                    <path fill="currentColor" d={mdiTrashCanOutline} />
                  </Icon>
                }
                colorScheme="red"
                size="sm"
              >
                Danger
              </Button>
              <Button
                leftIcon={
                  <Icon boxSize="4.5">
                    <path fill="currentColor" d={mdiTrashCanOutline} />
                  </Icon>
                }
                colorScheme="red"
                size="xs"
              >
                Danger
              </Button>
            </Wrap>
          </Stack>
        </Box>
        <Box p="12">
          <Heading size="lg" mb="10" pt="12" mt="-12" id="icon-button">
            <Link href="#icon-button">Icon Button</Link>
          </Heading>
          <Stack spacing="8">
            <Wrap align="center">
              <Tooltip label="Add">
                <IconButton
                  aria-label="I am icon button"
                  variant="primary"
                  size="lg"
                  icon={
                    <Icon boxSize="6">
                      <path fill="currentColor" d={mdiPlus} />
                    </Icon>
                  }
                />
              </Tooltip>
              <Tooltip label="Add">
                <IconButton
                  aria-label="I am icon button"
                  variant="primary"
                  icon={
                    <Icon boxSize="6">
                      <path fill="currentColor" d={mdiPlus} />
                    </Icon>
                  }
                />
              </Tooltip>
              <Tooltip label="Add">
                <IconButton
                  aria-label="I am icon button"
                  variant="primary"
                  size="sm"
                  icon={
                    <Icon boxSize="6">
                      <path fill="currentColor" d={mdiPlus} />
                    </Icon>
                  }
                />
              </Tooltip>
              <Tooltip label="Add">
                <IconButton
                  aria-label="I am icon button"
                  variant="primary"
                  size="xs"
                  icon={
                    <Icon boxSize="4.5">
                      <path fill="currentColor" d={mdiPlus} />
                    </Icon>
                  }
                />
              </Tooltip>
            </Wrap>
            <Wrap align="center">
              <Tooltip label="Edit">
                <IconButton
                  aria-label="I am icon button"
                  variant="secondary"
                  size="lg"
                  icon={
                    <Icon boxSize="6">
                      <path fill="currentColor" d={mdiPencilOutline} />
                    </Icon>
                  }
                />
              </Tooltip>
              <Tooltip label="Edit">
                <IconButton
                  aria-label="I am icon button"
                  variant="secondary"
                  icon={
                    <Icon boxSize="6">
                      <path fill="currentColor" d={mdiPencilOutline} />
                    </Icon>
                  }
                />
              </Tooltip>
              <Tooltip label="Edit">
                <IconButton
                  aria-label="I am icon button"
                  variant="secondary"
                  size="sm"
                  icon={
                    <Icon boxSize="6">
                      <path fill="currentColor" d={mdiPencilOutline} />
                    </Icon>
                  }
                />
              </Tooltip>
              <Tooltip label="Edit">
                <IconButton
                  aria-label="I am icon button"
                  variant="secondary"
                  size="xs"
                  icon={
                    <Icon boxSize="4.5">
                      <path fill="currentColor" d={mdiPencilOutline} />
                    </Icon>
                  }
                />
              </Tooltip>
            </Wrap>
            <Wrap align="center">
              <Tooltip label="Edit">
                <IconButton
                  aria-label="I am icon button"
                  variant="subtle"
                  size="lg"
                  icon={
                    <Icon boxSize="6">
                      <path fill="currentColor" d={mdiPencilOutline} />
                    </Icon>
                  }
                />
              </Tooltip>
              <Tooltip label="Edit">
                <IconButton
                  aria-label="I am icon button"
                  variant="subtle"
                  icon={
                    <Icon boxSize="6">
                      <path fill="currentColor" d={mdiPencilOutline} />
                    </Icon>
                  }
                />
              </Tooltip>
              <Tooltip label="Edit">
                <IconButton
                  aria-label="I am icon button"
                  variant="subtle"
                  size="sm"
                  icon={
                    <Icon boxSize="6">
                      <path fill="currentColor" d={mdiPencilOutline} />
                    </Icon>
                  }
                />
              </Tooltip>
              <Tooltip label="Edit">
                <IconButton
                  aria-label="I am icon button"
                  variant="subtle"
                  size="xs"
                  icon={
                    <Icon boxSize="4.5">
                      <path fill="currentColor" d={mdiPencilOutline} />
                    </Icon>
                  }
                />
              </Tooltip>
            </Wrap>
            <Wrap align="center">
              <Tooltip label="More options">
                <IconButton
                  aria-label="I am icon button"
                  variant="minimal"
                  size="lg"
                  icon={
                    <Icon boxSize="6">
                      <path fill="currentColor" d={mdiDotsHorizontal} />
                    </Icon>
                  }
                />
              </Tooltip>
              <Tooltip label="More options">
                <IconButton
                  aria-label="I am icon button"
                  variant="minimal"
                  icon={
                    <Icon boxSize="6">
                      <path fill="currentColor" d={mdiDotsHorizontal} />
                    </Icon>
                  }
                />
              </Tooltip>
              <Tooltip label="More options">
                <IconButton
                  aria-label="I am icon button"
                  variant="minimal"
                  size="sm"
                  icon={
                    <Icon boxSize="6">
                      <path fill="currentColor" d={mdiDotsHorizontal} />
                    </Icon>
                  }
                />
              </Tooltip>
              <Tooltip label="More options">
                <IconButton
                  aria-label="I am icon button"
                  variant="minimal"
                  size="xs"
                  icon={
                    <Icon boxSize="4.5">
                      <path fill="currentColor" d={mdiDotsHorizontal} />
                    </Icon>
                  }
                />
              </Tooltip>
            </Wrap>
            <Wrap align="center">
              <Tooltip label="Previous">
                <IconButton
                  aria-label="I am icon button"
                  colorScheme="blackAlpha"
                  size="lg"
                  icon={
                    <Icon boxSize="6">
                      <path fill="currentColor" d={mdiChevronLeft} />
                    </Icon>
                  }
                />
              </Tooltip>
              <Tooltip label="Next">
                <IconButton
                  aria-label="I am icon button"
                  colorScheme="blackAlpha"
                  icon={
                    <Icon boxSize="6">
                      <path fill="currentColor" d={mdiChevronRight} />
                    </Icon>
                  }
                />
              </Tooltip>
              <Tooltip label="Previous">
                <IconButton
                  aria-label="I am icon button"
                  colorScheme="blackAlpha"
                  size="sm"
                  icon={
                    <Icon boxSize="6">
                      <path fill="currentColor" d={mdiChevronLeft} />
                    </Icon>
                  }
                />
              </Tooltip>
              <Tooltip label="Next">
                <IconButton
                  aria-label="I am icon button"
                  colorScheme="blackAlpha"
                  size="xs"
                  icon={
                    <Icon boxSize="4.5">
                      <path fill="currentColor" d={mdiChevronRight} />
                    </Icon>
                  }
                />
              </Tooltip>
            </Wrap>
            <Wrap align="center">
              <Tooltip label="Approve">
                <IconButton
                  aria-label="I am icon button"
                  variant="solid"
                  colorScheme="teal"
                  size="lg"
                  icon={
                    <Icon boxSize="6">
                      <path fill="currentColor" d={mdiCheck} />
                    </Icon>
                  }
                />
              </Tooltip>
              <Tooltip label="Approve">
                <IconButton
                  aria-label="I am icon button"
                  variant="solid"
                  colorScheme="teal"
                  icon={
                    <Icon boxSize="6">
                      <path fill="currentColor" d={mdiCheck} />
                    </Icon>
                  }
                />
              </Tooltip>
              <Tooltip label="Approve">
                <IconButton
                  aria-label="I am icon button"
                  variant="solid"
                  colorScheme="teal"
                  size="sm"
                  icon={
                    <Icon boxSize="6">
                      <path fill="currentColor" d={mdiCheck} />
                    </Icon>
                  }
                />
              </Tooltip>
              <Tooltip label="Approve">
                <IconButton
                  aria-label="I am icon button"
                  variant="solid"
                  colorScheme="teal"
                  size="xs"
                  icon={
                    <Icon boxSize="4.5">
                      <path fill="currentColor" d={mdiCheck} />
                    </Icon>
                  }
                />
              </Tooltip>
            </Wrap>
            <Wrap align="center">
              <Tooltip label="Reject">
                <IconButton
                  aria-label="I am icon button"
                  variant="solid"
                  colorScheme="red"
                  size="lg"
                  icon={
                    <Icon boxSize="6">
                      <path fill="currentColor" d={mdiCancel} />
                    </Icon>
                  }
                />
              </Tooltip>
              <Tooltip label="Reject">
                <IconButton
                  aria-label="I am icon button"
                  variant="solid"
                  colorScheme="red"
                  icon={
                    <Icon boxSize="6">
                      <path fill="currentColor" d={mdiCancel} />
                    </Icon>
                  }
                />
              </Tooltip>
              <Tooltip label="Reject">
                <IconButton
                  aria-label="I am icon button"
                  variant="solid"
                  colorScheme="red"
                  size="sm"
                  icon={
                    <Icon boxSize="6">
                      <path fill="currentColor" d={mdiCancel} />
                    </Icon>
                  }
                />
              </Tooltip>
              <Tooltip label="Reject">
                <IconButton
                  aria-label="I am icon button"
                  variant="solid"
                  colorScheme="red"
                  size="xs"
                  icon={
                    <Icon boxSize="4.5">
                      <path fill="currentColor" d={mdiCancel} />
                    </Icon>
                  }
                />
              </Tooltip>
            </Wrap>
            <Wrap align="center">
              <Tooltip label="Switch…">
                <IconButton
                  aria-label="I am icon button"
                  variant="minimal"
                  size="sm"
                  icon={
                    <Icon boxSize="6">
                      <path fill="currentColor" d={mdiDotsGrid} />
                    </Icon>
                  }
                />
              </Tooltip>
            </Wrap>
          </Stack>
        </Box>
        <Box p="12">
          <Heading size="lg" mb="10" pt="12" mt="-12" id="closebutton">
            <Link href="#closebutton">CloseButton</Link>
          </Heading>
          <Wrap align="center">
            <CloseButton size="lg" />
            <CloseButton />
            <CloseButton size="sm" />
          </Wrap>
        </Box>
        <Box p="12">
          <Heading size="lg" mb="10" pt="12" mt="-12" id="alert">
            <Link href="#alert">Alert</Link>
          </Heading>
          <Stack spacing="6">
            <Alert status="error">
              <AlertIcon />
              There was an error processing your request
            </Alert>
            <Alert status="success" colorScheme="teal">
              <AlertIcon />
              Data uploaded to the server. Fire on!
            </Alert>
            <Alert status="warning">
              <AlertIcon />
              Seems your account is about expire, upgrade now
            </Alert>
            <Alert status="info" colorScheme="purple">
              <AlertIcon />
              Chakra is going live on August 30th. Get ready!
            </Alert>
            <Alert>
              <AlertIcon as={AtSignIcon} />
              Custom alert
            </Alert>
          </Stack>
        </Box>
        <Box p="12">
          <Heading size="lg" mb="10" pt="12" mt="-12" id="avatar">
            <Link href="#avatar">Avatar</Link>
          </Heading>
          <Wrap mb="6">
            <Tooltip label="Dan Abrahmov">
              <Avatar size="2xs" />
            </Tooltip>
            <Tooltip label="Dan Abrahmov">
              <Avatar size="2xs" name="Dan Abrahmov" />
            </Tooltip>
            <Tooltip label="Dan Abrahmov">
              <Avatar
                size="2xs"
                name="Dan Abrahmov"
                src="https://bit.ly/dan-abramov"
              />
            </Tooltip>
          </Wrap>
          <Wrap mb="6">
            <Tooltip label="Kola Tioluwani">
              <Avatar size="xs" />
            </Tooltip>
            <Tooltip label="Kola Tioluwani">
              <Avatar size="xs" name="Kola Tioluwani" />
            </Tooltip>
            <Tooltip label="Kola Tioluwani">
              <Avatar
                size="xs"
                name="Kola Tioluwani"
                src="https://avatars.githubusercontent.com/u/11310046"
              />
            </Tooltip>
          </Wrap>
          <Wrap mb="6">
            <Tooltip label="Kent Dodds">
              <Avatar size="sm" />
            </Tooltip>
            <Tooltip label="Kent Dodds">
              <Avatar size="sm" name="Kent Dodds" />
            </Tooltip>
            <Tooltip label="Kent Dodds">
              <Avatar
                size="sm"
                name="Kent Dodds"
                src="https://bit.ly/kent-c-dodds"
              />
            </Tooltip>
          </Wrap>
          <Wrap mb="6">
            <Tooltip label="Ryan Florence">
              <Avatar />
            </Tooltip>
            <Tooltip label="Ryan Florence">
              <Avatar name="Ryan Florence" />
            </Tooltip>
            <Tooltip label="Ryan Florence">
              <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
            </Tooltip>
          </Wrap>
          <Wrap mb="6">
            <Tooltip label="Prosper Otemuyiwa">
              <Avatar size="lg" />
            </Tooltip>
            <Tooltip label="Prosper Otemuyiwa">
              <Avatar size="lg" name="Prosper Otemuyiwa" />
            </Tooltip>
            <Tooltip label="Prosper Otemuyiwa">
              <Avatar
                size="lg"
                name="Prosper Otemuyiwa"
                src="https://bit.ly/prosper-baba"
              />
            </Tooltip>
          </Wrap>
          <Wrap mb="6">
            <Tooltip label="Christian Nwamba">
              <Avatar size="xl" />
            </Tooltip>
            <Tooltip label="Christian Nwamba">
              <Avatar size="xl" name="Christian Nwamba" />
            </Tooltip>
            <Tooltip label="Christian Nwamba">
              <Avatar
                size="xl"
                name="Christian Nwamba"
                src="https://bit.ly/code-beast"
              />
            </Tooltip>
          </Wrap>
          <Wrap mb="6">
            <Tooltip label="Segun Adebayo">
              <Avatar size="2xl" />
            </Tooltip>
            <Tooltip label="Segun Adebayo">
              <Avatar size="2xl" name="Segun Adebayo" />
            </Tooltip>
            <Tooltip label="Segun Adebayo">
              <Avatar
                size="2xl"
                name="Segun Adebayo"
                src="https://avatars.githubusercontent.com/u/6916170"
              />
            </Tooltip>
          </Wrap>
        </Box>
        <Box p="12">
          <Heading size="lg" mb="10" pt="12" mt="-12" id="badge">
            <Link href="#badge">Badge</Link>
          </Heading>
          <Wrap align="center" mb="6">
            <Badge>Default</Badge>
            <Badge colorScheme="gray">Gray</Badge>
            <Badge colorScheme="red">Red</Badge>
            <Badge colorScheme="orange">Orange</Badge>
            <Badge colorScheme="yellow">Yellow</Badge>
            <Badge colorScheme="green">Green</Badge>
            <Badge colorScheme="teal">Teal</Badge>
            <Badge colorScheme="cyan">Cyan</Badge>
            <Badge colorScheme="blue">Blue</Badge>
            <Badge colorScheme="purple">Purple</Badge>
            <Badge colorScheme="pink">Pink</Badge>
          </Wrap>
          <Wrap align="center">
            <Badge colorScheme="red">Error</Badge>
            <Badge colorScheme="orange">Warning</Badge>
            <Badge colorScheme="teal">Success</Badge>
            <Badge colorScheme="purple">Info</Badge>
          </Wrap>
        </Box>
        <Box p="12">
          <Heading size="lg" mb="10" pt="12" mt="-12" id="breadcrumb">
            <Link href="#breadcrumb">Breadcrumb</Link>
          </Heading>
          <Stack spacing="6">
            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">One</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Two</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">Three</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Breadcrumb
              separator={
                <Icon>
                  <path fill="currentColor" d={mdiChevronRight} />
                </Icon>
              }
            >
              <BreadcrumbItem>
                <BreadcrumbLink href="#">One</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Two</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">Three</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Stack>
        </Box>
        <Box p="12">
          <Heading size="lg" mb="10" pt="12" mt="-12" id="circular-progress">
            <Link href="#circular-progress">Circular Progress</Link>
          </Heading>
          <CircularProgress isIndeterminate />
        </Box>
        <Box p="12">
          <Heading size="lg" mb="10" pt="12" mt="-12" id="code">
            <Link href="#code">Code</Link>
          </Heading>
          <Wrap align="center">
            <Code>Default</Code>
            <Code colorScheme="gray">Gray</Code>
            <Code colorScheme="red">Red</Code>
            <Code colorScheme="orange">Orange</Code>
            <Code colorScheme="yellow">Yellow</Code>
            <Code colorScheme="green">Green</Code>
            <Code colorScheme="teal">Teal</Code>
            <Code colorScheme="cyan">Cyan</Code>
            <Code colorScheme="blue">Blue</Code>
            <Code colorScheme="purple">Purple</Code>
            <Code colorScheme="pink">Pink</Code>
          </Wrap>
        </Box>
        <Box p="12">
          <Heading size="lg" mb="10" pt="12" mt="-12" id="divider">
            <Link href="#divider">Divider</Link>
          </Heading>
          <Divider />
        </Box>
        <Box p="12">
          <Heading size="lg" mb="10" pt="12" mt="-12" id="form-control">
            <Link href="#form-control">Form Control</Link>
          </Heading>
          <Stack spacing="10">
            <FormControl>
              <FormLabel>Input</FormLabel>
              <Input placeholder="Placeholder" />
              <FormHelperText>Helper text</FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel>Input with icon</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Icon>
                    <path fill="currentColor" d={mdiLockOutline} />
                  </Icon>
                </InputLeftElement>
                <Input />
              </InputGroup>
              <FormHelperText>Helper text</FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel>Input with addon</FormLabel>
              <InputGroup>
                <InputLeftAddon>+234</InputLeftAddon>
                <Input />
              </InputGroup>
              <FormHelperText>Helper text</FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="country">Select</FormLabel>
              <Select>
                <option>Content</option>
                <option>Experience</option>
                <option>Commerce</option>
              </Select>
              <FormHelperText>Helper text</FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="country">Number Input</FormLabel>
              <NumberInput>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <FormHelperText>Helper text</FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel>Textarea</FormLabel>
              <Textarea />
              <FormHelperText>Helper text</FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel>Radios</FormLabel>
              <RadioGroup defaultValue="Disabled">
                <HStack spacing="6">
                  <Radio value="Disabled" isDisabled>
                    Disabled
                  </Radio>
                  <Radio value="Content">Content</Radio>
                  <Radio value="Experience">Experience</Radio>
                  <Radio value="Commerce">Commerce</Radio>
                </HStack>
              </RadioGroup>
              <FormHelperText>Helper text</FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel>Checkboxes</FormLabel>
              <CheckboxGroup>
                <HStack spacing="6">
                  <Checkbox value="Disabled" isDisabled>
                    Disabled
                  </Checkbox>
                  <Checkbox value="Content">Content</Checkbox>
                  <Checkbox value="Experience">Experience</Checkbox>
                  <Checkbox value="Commerce">Commerce</Checkbox>
                </HStack>
              </CheckboxGroup>
              <FormHelperText>Helper text</FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel>Switch</FormLabel>
              <Switch />
              <FormHelperText>Helper text</FormHelperText>
            </FormControl>
            <FormControl isRequired isInvalid>
              <FormLabel>Input error</FormLabel>
              <InputGroup>
                <Input />
              </InputGroup>
              <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>
            <FormControl isDisabled>
              <FormLabel>Input disabled</FormLabel>
              <Input />
              <FormHelperText>Helper text</FormHelperText>
            </FormControl>
          </Stack>
        </Box>
        <Box p="12">
          <Heading size="lg" mb="10" pt="12" mt="-12" id="heading">
            <Link href="#heading">Heading</Link>
          </Heading>
          <Stack spacing="6">
            <Heading size="2xl">Heading 2xl</Heading>
            <Heading size="xl">Heading xl</Heading>
            <Heading size="lg">Heading lg</Heading>
            <Heading size="md">Heading md</Heading>
            <Heading size="sm">Heading sm</Heading>
            <Heading size="xs">Heading xs</Heading>
            <Heading variant="section">Section heading</Heading>
          </Stack>
        </Box>
        <Box p="12">
          <Heading size="lg" mb="10" pt="12" mt="-12" id="icon">
            <Link href="#icon">Icon</Link>
          </Heading>
          <Wrap mb="6">
            <Icon
              boxSize="6"
              color="blackAlpha.400"
              _hover={{ color: "blackAlpha.500", cursor: "move" }}
            >
              <path fill="currentColor" d={mdiDragVertical} />
            </Icon>
          </Wrap>
          <Wrap mb="6">
            <Icon boxSize="6" color="blackAlpha.500">
              <path fill="currentColor" d={mdiMagnify} />
            </Icon>
            <Icon boxSize="6" color="gray">
              <path fill="currentColor" d={mdiMagnify} />
            </Icon>
            <Icon boxSize="6" color="red.500">
              <path fill="currentColor" d={mdiMagnify} />
            </Icon>
            <Icon boxSize="6" color="orange.500">
              <path fill="currentColor" d={mdiMagnify} />
            </Icon>
            <Icon boxSize="6" color="yellow.500">
              <path fill="currentColor" d={mdiMagnify} />
            </Icon>
            <Icon boxSize="6" color="green.500">
              <path fill="currentColor" d={mdiMagnify} />
            </Icon>
            <Icon boxSize="6" color="teal.500">
              <path fill="currentColor" d={mdiMagnify} />
            </Icon>
            <Icon boxSize="6" color="cyan.500">
              <path fill="currentColor" d={mdiMagnify} />
            </Icon>
            <Icon boxSize="6" color="blue.500">
              <path fill="currentColor" d={mdiMagnify} />
            </Icon>
            <Icon boxSize="6" color="purple.500">
              <path fill="currentColor" d={mdiMagnify} />
            </Icon>
            <Icon boxSize="6" color="pink.500">
              <path fill="currentColor" d={mdiMagnify} />
            </Icon>
          </Wrap>
          <Wrap mb="6">
            <Icon
              boxSize="8"
              p="1.5"
              borderRadius="base"
              bg="blackAlpha.100"
              color="blackAlpha.600"
            >
              <path fill="currentColor" d={mdiMagnify} />
            </Icon>
            <Icon
              boxSize="8"
              p="1.5"
              borderRadius="base"
              bg="gray.100"
              color="gray.600"
            >
              <path fill="currentColor" d={mdiMagnify} />
            </Icon>
            <Icon
              boxSize="8"
              p="1.5"
              borderRadius="base"
              bg="red.100"
              color="red.600"
            >
              <path fill="currentColor" d={mdiMagnify} />
            </Icon>
            <Icon
              boxSize="8"
              p="1.5"
              borderRadius="base"
              bg="orange.100"
              color="orange.600"
            >
              <path fill="currentColor" d={mdiMagnify} />
            </Icon>
            <Icon
              boxSize="8"
              p="1.5"
              borderRadius="base"
              bg="yellow.100"
              color="yellow.600"
            >
              <path fill="currentColor" d={mdiMagnify} />
            </Icon>
            <Icon
              boxSize="8"
              p="1.5"
              borderRadius="base"
              bg="green.100"
              color="green.600"
            >
              <path fill="currentColor" d={mdiMagnify} />
            </Icon>
            <Icon
              boxSize="8"
              p="1.5"
              borderRadius="base"
              bg="teal.100"
              color="teal.600"
            >
              <path fill="currentColor" d={mdiMagnify} />
            </Icon>
            <Icon
              boxSize="8"
              p="1.5"
              borderRadius="base"
              bg="cyan.100"
              color="cyan.600"
            >
              <path fill="currentColor" d={mdiMagnify} />
            </Icon>
            <Icon
              boxSize="8"
              p="1.5"
              borderRadius="base"
              bg="blue.100"
              color="blue.600"
            >
              <path fill="currentColor" d={mdiMagnify} />
            </Icon>
            <Icon
              boxSize="8"
              p="1.5"
              borderRadius="base"
              bg="purple.100"
              color="purple.600"
            >
              <path fill="currentColor" d={mdiMagnify} />
            </Icon>
            <Icon
              boxSize="8"
              p="1.5"
              borderRadius="base"
              bg="pink.100"
              color="pink.600"
            >
              <path fill="currentColor" d={mdiMagnify} />
            </Icon>
          </Wrap>
          <Wrap mb="6">
            <Icon
              boxSize="8"
              p="1.5"
              borderRadius="base"
              bg="blackAlpha.500"
              color="white"
            >
              <path fill="currentColor" d={mdiMagnify} />
            </Icon>
            <Icon
              boxSize="8"
              p="1.5"
              borderRadius="base"
              bg="gray.500"
              color="white"
            >
              <path fill="currentColor" d={mdiMagnify} />
            </Icon>
            <Icon
              boxSize="8"
              p="1.5"
              borderRadius="base"
              bg="red.500"
              color="white"
            >
              <path fill="currentColor" d={mdiMagnify} />
            </Icon>
            <Icon
              boxSize="8"
              p="1.5"
              borderRadius="base"
              bg="orange.500"
              color="white"
            >
              <path fill="currentColor" d={mdiMagnify} />
            </Icon>
            <Icon
              boxSize="8"
              p="1.5"
              borderRadius="base"
              bg="yellow.500"
              color="white"
            >
              <path fill="currentColor" d={mdiMagnify} />
            </Icon>
            <Icon
              boxSize="8"
              p="1.5"
              borderRadius="base"
              bg="green.500"
              color="white"
            >
              <path fill="currentColor" d={mdiMagnify} />
            </Icon>
            <Icon
              boxSize="8"
              p="1.5"
              borderRadius="base"
              bg="teal.500"
              color="white"
            >
              <path fill="currentColor" d={mdiMagnify} />
            </Icon>
            <Icon
              boxSize="8"
              p="1.5"
              borderRadius="base"
              bg="cyan.500"
              color="white"
            >
              <path fill="currentColor" d={mdiMagnify} />
            </Icon>
            <Icon
              boxSize="8"
              p="1.5"
              borderRadius="base"
              bg="blue.500"
              color="white"
            >
              <path fill="currentColor" d={mdiMagnify} />
            </Icon>
            <Icon
              boxSize="8"
              p="1.5"
              borderRadius="base"
              bg="purple.500"
              color="white"
            >
              <path fill="currentColor" d={mdiMagnify} />
            </Icon>
            <Icon
              boxSize="8"
              p="1.5"
              borderRadius="base"
              bg="pink.500"
              color="white"
            >
              <path fill="currentColor" d={mdiMagnify} />
            </Icon>
          </Wrap>
          <Wrap mb="6">
            <Icon
              boxSize="4"
              p="0.5"
              borderRadius="sm"
              bg="purple.100"
              color="purple.600"
            >
              <path fill="currentColor" d={mdiMagnify} />
            </Icon>
            <Icon
              boxSize="6"
              p="1"
              borderRadius="base"
              bg="purple.100"
              color="purple.600"
            >
              <path fill="currentColor" d={mdiMagnify} />
            </Icon>
            <Icon
              boxSize="8"
              p="1.5"
              borderRadius="base"
              bg="purple.100"
              color="purple.600"
            >
              <path fill="currentColor" d={mdiMagnify} />
            </Icon>
            <Icon
              boxSize="10"
              p="2"
              borderRadius="md"
              bg="purple.100"
              color="purple.600"
            >
              <path fill="currentColor" d={mdiMagnify} />
            </Icon>
            <Icon
              boxSize="12"
              p="2.5"
              borderRadius="md"
              bg="purple.100"
              color="purple.600"
            >
              <path fill="currentColor" d={mdiMagnify} />
            </Icon>
            <Icon
              boxSize="14"
              p="3"
              borderRadius="lg"
              bg="purple.100"
              color="purple.600"
            >
              <path fill="currentColor" d={mdiMagnify} />
            </Icon>
            <Icon
              boxSize="16"
              p="3.5"
              borderRadius="lg"
              bg="purple.100"
              color="purple.600"
            >
              <path fill="currentColor" d={mdiMagnify} />
            </Icon>
            <Icon
              boxSize="20"
              p="4"
              borderRadius="xl"
              bg="purple.100"
              color="purple.600"
            >
              <path fill="currentColor" d={mdiMagnify} />
            </Icon>
            <Icon
              boxSize="24"
              p="5"
              borderRadius="xl"
              bg="purple.100"
              color="purple.600"
            >
              <path fill="currentColor" d={mdiMagnify} />
            </Icon>
            <Icon
              boxSize="28"
              p="6"
              borderRadius="2xl"
              bg="purple.100"
              color="purple.600"
            >
              <path fill="currentColor" d={mdiMagnify} />
            </Icon>
            <Icon
              boxSize="32"
              p="7"
              borderRadius="2xl"
              bg="purple.100"
              color="purple.600"
            >
              <path fill="currentColor" d={mdiMagnify} />
            </Icon>
            <Icon
              boxSize="36"
              p="8"
              borderRadius="3xl"
              bg="purple.100"
              color="purple.600"
            >
              <path fill="currentColor" d={mdiMagnify} />
            </Icon>
            <Icon
              boxSize="40"
              p="9"
              borderRadius="3xl"
              bg="purple.100"
              color="purple.600"
            >
              <path fill="currentColor" d={mdiMagnify} />
            </Icon>
          </Wrap>
        </Box>
        <Box p="12">
          <Heading size="lg" mb="10" pt="12" mt="-12" id="link">
            <Link href="#link">Link</Link>
          </Heading>
          <Stack>
            <Link>This is a link</Link>
          </Stack>
        </Box>
        <Box p="12">
          <Heading size="lg" mb="10" pt="12" mt="-12" id="menu">
            <Link href="#menu">Menu</Link>
          </Heading>
          <Wrap align="center">
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={
                  <Icon boxSize="6">
                    <path fill="currentColor" d={mdiChevronDown} />
                  </Icon>
                }
              >
                Menu
              </MenuButton>
              <MenuList>
                <MenuItem>Edit</MenuItem>
                <MenuItem>Star</MenuItem>
                <MenuItem>Delete</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={
                  <Icon boxSize="6">
                    <path fill="currentColor" d={mdiChevronDown} />
                  </Icon>
                }
              >
                Menu with icons
              </MenuButton>
              <MenuList>
                <MenuItem
                  icon={
                    <Icon boxSize="6" color="chakra-placeholder-color">
                      <path fill="currentColor" d={mdiPencilOutline} />
                    </Icon>
                  }
                >
                  Edit
                </MenuItem>
                <MenuItem
                  icon={
                    <Icon boxSize="6" color="chakra-placeholder-color">
                      <path fill="currentColor" d={mdiStarOutline} />
                    </Icon>
                  }
                >
                  Star
                </MenuItem>
                <MenuItem
                  icon={
                    <Icon boxSize="6" color="chakra-placeholder-color">
                      <path fill="currentColor" d={mdiTrashCanOutline} />
                    </Icon>
                  }
                >
                  Delete
                </MenuItem>
              </MenuList>
            </Menu>
          </Wrap>
        </Box>
        <Box p="12">
          <Heading size="lg" mb="10" pt="12" mt="-12" id="modal">
            <Link href="#modal">Modal</Link>
          </Heading>
          <Stack spacing="8">
            <Wrap align="center">
              <Button onClick={onOpen}>Open Modal</Button>
              <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Modal title</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <LoremIpsum p={1} />
                  </ModalBody>
                  <ModalFooter>
                    <ButtonGroup>
                      <Button variant="minimal">Cancel</Button>
                      <Button onClick={onClose}>Close</Button>
                    </ButtonGroup>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Wrap>
          </Stack>
        </Box>
        <Box p="12">
          <Heading size="lg" mb="10" pt="12" mt="-12" id="skeleton">
            <Link href="#skeleton">Skeleton</Link>
          </Heading>
          <Skeleton height="20" />
        </Box>
        <Box p="12">
          <Heading size="lg" mb="10" pt="12" mt="-12" id="spinner">
            <Link href="#spinner">Spinner</Link>
          </Heading>
          <Wrap mb="6">
            <Spinner size="xs" />
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
            <Spinner size="xl" />
          </Wrap>
          <Wrap mb="6">
            <Spinner color="blackAlpha.500" size="xs" />
            <Spinner color="blackAlpha.500" size="sm" />
            <Spinner color="blackAlpha.500" size="md" />
            <Spinner color="blackAlpha.500" size="lg" />
            <Spinner color="blackAlpha.500" size="xl" />
          </Wrap>
        </Box>
        <Box p="12">
          <Heading size="lg" mb="10" pt="12" mt="-12" id="table">
            <Link href="#table">Table</Link>
          </Heading>
          <TableContainer>
            <Table>
              <Thead>
                <Tr>
                  <Th>Column one</Th>
                  <Th>Column three</Th>
                  <Th>Status</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Value</Td>
                  <Td>Value</Td>
                  <Td>
                    <Badge my="-1">New</Badge>
                  </Td>
                  <Td isNumeric>
                    <Tooltip label="More options">
                      <IconButton
                        aria-label="I am icon button"
                        my="-2"
                        size="sm"
                        variant="minimal"
                        icon={
                          <Icon boxSize="6">
                            <path fill="currentColor" d={mdiDotsHorizontal} />
                          </Icon>
                        }
                      />
                    </Tooltip>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Value</Td>
                  <Td>Value</Td>
                  <Td>
                    <Badge my="-1" colorScheme="green">
                      Done
                    </Badge>
                  </Td>
                  <Td isNumeric>
                    <Tooltip label="More options">
                      <IconButton
                        aria-label="I am icon button"
                        my="-2"
                        size="sm"
                        variant="minimal"
                        icon={
                          <Icon boxSize="6">
                            <path fill="currentColor" d={mdiDotsHorizontal} />
                          </Icon>
                        }
                      />
                    </Tooltip>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Value</Td>
                  <Td>Value</Td>
                  <Td>
                    <Badge my="-1" colorScheme="red">
                      Failed
                    </Badge>
                  </Td>
                  <Td isNumeric>
                    <Tooltip label="More options">
                      <IconButton
                        aria-label="I am icon button"
                        my="-2"
                        size="sm"
                        variant="minimal"
                        icon={
                          <Icon boxSize="6">
                            <path fill="currentColor" d={mdiDotsHorizontal} />
                          </Icon>
                        }
                      />
                    </Tooltip>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <Box p="12">
          <Heading size="lg" mb="10" pt="12" mt="-12" id="tabs">
            <Link href="#tabs">Tabs</Link>
          </Heading>
          <Stack spacing="10">
            <Tabs>
              <TabList>
                <Tab>One</Tab>
                <Tab>Two</Tab>
                <Tab>Three</Tab>
                <Tab isDisabled>Four</Tab>
              </TabList>
            </Tabs>
            <Tabs variant="soft-rounded">
              <TabList>
                <Tab>One</Tab>
                <Tab>Two</Tab>
                <Tab>Three</Tab>
                <Tab isDisabled>Four</Tab>
              </TabList>
            </Tabs>
            <Tabs variant="solid-rounded">
              <TabList>
                <Tab>One</Tab>
                <Tab>Two</Tab>
                <Tab>Three</Tab>
                <Tab isDisabled>Four</Tab>
              </TabList>
            </Tabs>
          </Stack>
        </Box>
        <Box p="12">
          <Heading size="lg" mb="10" pt="12" mt="-12" id="tag">
            <Link href="#tag">Tag</Link>
          </Heading>
          <Stack spacing="12">
            <Wrap align="center">
              <Tag size="sm">Default</Tag>
              <Tag size="sm" colorScheme="gray">
                Gray
              </Tag>
              <Tag size="sm" colorScheme="red">
                Red
              </Tag>
              <Tag size="sm" colorScheme="orange">
                Orange
              </Tag>
              <Tag size="sm" colorScheme="yellow">
                Yellow
              </Tag>
              <Tag size="sm" colorScheme="green">
                Green
              </Tag>
              <Tag size="sm" colorScheme="teal">
                Teal
              </Tag>
              <Tag size="sm" colorScheme="cyan">
                Cyan
              </Tag>
              <Tag size="sm" colorScheme="blue">
                Blue
              </Tag>
              <Tag size="sm" colorScheme="purple">
                Purple
              </Tag>
              <Tag size="sm" colorScheme="pink">
                Pink
              </Tag>
            </Wrap>
            <Wrap align="center">
              <Tag>Default</Tag>
              <Tag colorScheme="gray">Gray</Tag>
              <Tag colorScheme="red">Red</Tag>
              <Tag colorScheme="orange">Orange</Tag>
              <Tag colorScheme="yellow">Yellow</Tag>
              <Tag colorScheme="green">Green</Tag>
              <Tag colorScheme="teal">Teal</Tag>
              <Tag colorScheme="cyan">Cyan</Tag>
              <Tag colorScheme="blue">Blue</Tag>
              <Tag colorScheme="purple">Purple</Tag>
              <Tag colorScheme="pink">Pink</Tag>
            </Wrap>
            <Wrap align="center">
              <Tag size="lg">Default</Tag>
              <Tag size="lg" colorScheme="gray">
                Gray
              </Tag>
              <Tag size="lg" colorScheme="red">
                Red
              </Tag>
              <Tag size="lg" colorScheme="orange">
                Orange
              </Tag>
              <Tag size="lg" colorScheme="yellow">
                Yellow
              </Tag>
              <Tag size="lg" colorScheme="green">
                Green
              </Tag>
              <Tag size="lg" colorScheme="teal">
                Teal
              </Tag>
              <Tag size="lg" colorScheme="cyan">
                Cyan
              </Tag>
              <Tag size="lg" colorScheme="blue">
                Blue
              </Tag>
              <Tag size="lg" colorScheme="purple">
                Purple
              </Tag>
              <Tag size="lg" colorScheme="pink">
                Pink
              </Tag>
            </Wrap>
          </Stack>
        </Box>
        <Box p="12">
          <Heading size="lg" mb="10" pt="12" mt="-12" id="text">
            <Link href="#text">Text</Link>
          </Heading>
          <Stack spacing="6">
            <Text>
              Text. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </Text>
            <Text variant="subtle">
              Text subtle. Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit.
            </Text>
            <Text variant="small">
              Text small. Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit.
            </Text>
            <Text variant="tiny">
              Text tiny. Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit.
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};
