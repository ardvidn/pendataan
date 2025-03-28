import { Column, Entity, Index } from "typeorm";

@Index("menu_pegawai_pkey", ["nip"], { unique: true })
@Entity("menu_pegawai", { schema: "public" })
export class MenuPegawai {
  @Column("character", { primary: true, name: "nip", length: 18 })
  nip!: string;

  @Column("character varying", { name: "menu", length: 255 })
  menu!: string;

  @Column("timestamp without time zone", {
    name: "tgl_update",
    nullable: true,
    default: () => "statement_timestamp()",
  })
  tglUpdate!: Date | null;
}
