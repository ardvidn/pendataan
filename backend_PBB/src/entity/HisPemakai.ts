import { Column, Entity } from "typeorm";

@Entity("his_pemakai", { schema: "public" })
export class HisPemakai {
  @Column("character", { name: "username", length: 10 })
  username!: string;

  @Column("timestamp without time zone", { name: "tgl_ubah" })
  tglUbah!: Date;

  @Column("character", { name: "user_pengubah", length: 10 })
  userPengubah!: string;

  @Column("character varying", { name: "ket", length: 10 })
  ket!: string;
}
