import { Injectable } from '@nestjs/common';
import { Member } from './entities/members.entity.js';
import { CreateBookDto } from '../books/dto/create-book-dto.js';
import { CreateMemberDto } from './dto/create-mb-dto.js';

@Injectable()
export class MembersService {
    private members: Member[] = [
        {
            id: 1,
            name: "Intan Tri",
            email: "intantri2006@gmail.com",
            phone: "081234567890",
            password: "password123"
        },
        {
            id: 2,
            name: "Han Taesan",
            email: "taetyangi@gmail.com",
            phone: "080987654321",
            password: "password123"
        }
    ];

    //Tampilkan semua data member
    findAll(): Member[] {
        return this.members
    }

    //Lihat data member berdasarkan id
    findbyId(id: number): Member | undefined {
        return this.members.find(member => member.id === id);
    }

    //Simpan data member
    create(inputMember: CreateMemberDto): Member {
        const newMember: Member = {
            id: this.members.length + 1,
            name: inputMember.name,
            email: inputMember.email,
            phone: inputMember.phone,
            password: inputMember.password
        };
        this.members.push(newMember);
        return newMember;
    }

    //Update data member
    update(id: number, updateMember: Partial<Member>): Member | undefined {
        const memberIndex = this.members.findIndex(member => member.id === id);
        if (memberIndex !== -1) {
            const member = this.members[memberIndex];
            const updatedMemberData = { ...member, ...updateMember };
            this.members[memberIndex] = updatedMemberData;
            return updatedMemberData;
        }
        return undefined;
    }

    //Menghapus data member
    remove(id: number): boolean {
        const memberIndex = this.members.findIndex(member => member.id === id);
        if (memberIndex !== -1) {
            this.members.splice(memberIndex, 1);
            return true;
        }
        return false;
    }
}
