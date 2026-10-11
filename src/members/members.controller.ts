import { Controller, Get, Param, Post, Body, Patch, Delete } from '@nestjs/common';
import { MembersService } from './members.service.js';
import { CreateMemberDto } from './dto/create-mb-dto.js';
import { UpdateMemberDto } from './dto/update-mb-dto.js';

@Controller('members')
export class MembersController {
    constructor(private readonly membersService: MembersService) {}
    @Get()
    findAll() {
        return this.membersService.findAll();
    }

    //Menampilkan data member berdasarkan id
    @Get(':id')
    findbyId(@Param('id') id: string) {
        return this.membersService.findbyId(parseInt(id));
    }

    //Menyimpan data member
    @Post()
    create(@Body() createMemberDto: CreateMemberDto) {
        return this.membersService.create(createMemberDto);
    }

    //Update data member
    @Patch(':id')
    update(@Param('id') id: string, @Body() updatedMember: Partial<UpdateMemberDto>) {
        return this.membersService.update(parseInt(id), updatedMember);
    }

    //Hapus data member
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.membersService.remove(parseInt(id));
    }
}
