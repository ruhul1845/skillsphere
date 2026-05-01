"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { BiEdit, BiUser } from "react-icons/bi";

export function UpdateUserModal() {
    const onSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;

        await authClient.updateUser({ name, image });
    };

    return (
        <Modal>
            <Button variant="secondary" className="bg-yellow-400 hover:bg-yellow-300 text-black">
                <BiEdit /> Update Profile
            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-sky-100 text-sky-500">
                                <BiUser className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Update User</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                                    <TextField className="w-full" name="name" type="text">
                                        <Label>Name</Label>
                                        <Input
                                            placeholder="Enter your name"
                                            className="focus:border-sky-400 focus:ring-sky-200 placeholder:text-gray-400"
                                        />
                                    </TextField>
                                    <TextField className="w-full" name="image" type="url">
                                        <Label>Image URL</Label>
                                        <Input
                                            placeholder="Image URL"
                                            className="focus:border-sky-400 focus:ring-sky-200 placeholder:text-gray-400"
                                        />
                                    </TextField>

                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary" className="bg-white border border-gray-200 text-yellow-600">
                                            Cancel
                                        </Button>
                                        <Button
                                            type="submit"
                                            slot="close"
                                            className="bg-yellow-400 hover:bg-yellow-300 text-black"
                                        >
                                            Save
                                        </Button>
                                    </Modal.Footer>
                                    {/* className="text-sm font-semibold bg-yellow-400 hover:bg-yellow-300 text-black px-4 py-1.5 rounded-lg transition-colors duration-200" */}
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}