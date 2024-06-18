import React, { useState } from "react";
import {
  Radio,
  RadioGroup,
  Stack,
  Input,
  Button,
  Textarea,
  Heading,
} from "@chakra-ui/react";
import useProjectQueryStore from "../store/useProjectQueryStore";

const ProjectInput: React.FC = () => {
  const projectDeatils = useProjectQueryStore(
    (s) => s.projectQuery.projectDeatils
  );
  const setProjectDeatils = useProjectQueryStore((s) => s.setProjectDeatils);
  const [selectedOption, setSelectedOption] = useState<string>("text");
  // const [inputValue, setInputValue] = useState<string>("");

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
    setProjectDeatils("");
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProjectDeatils(event.target.value);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setProjectDeatils(event.target.files[0].name);
    }
  };

  const handleSubmit = () => {};

  return (
    <>
      <Heading size="md" marginY={2}>
        Project Details
      </Heading>
      <RadioGroup onChange={handleOptionChange} value={selectedOption}>
        <Stack direction="row">
          <Radio value="text">Text</Radio>
          <Radio value="pdf">PDF</Radio>
          <Radio value="link">Link</Radio>
        </Stack>
      </RadioGroup>

      {selectedOption === "text" && (
        <Textarea
          mt={4}
          placeholder="Enter text"
          value={projectDeatils}
          onChange={handleInputChange}
        />
      )}

      {selectedOption === "pdf" && (
        <Input
          mt={4}
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          alignContent={"center"}
        />
      )}

      {selectedOption === "link" && (
        <Input
          mt={4}
          placeholder="Enter link"
          value={projectDeatils}
          onChange={handleInputChange}
        />
      )}

      {/* <Button mt={4} colorScheme="blue" onClick={() => console.log(inputValue)}>
        Submit
      </Button> */}
    </>
  );
};

export default ProjectInput;
