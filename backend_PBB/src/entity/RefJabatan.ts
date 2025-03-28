import { Column, Entity } from "typeorm";

@Entity("ref_jabatan", { schema: "public" })
export class RefJabatan {
  @Column("character", { name: "kd_jabatan", length: 2 })
  kdJabatan!: string;

  @Column("character varying", {
    name: "nm_jabatan",
    nullable: true,
    length: 36,
  })
  nmJabatan!: string | null;

  @Column("character varying", {
    name: "singkatan_jabatan",
    nullable: true,
    length: 30,
  })
  singkatanJabatan!: string | null;
}
