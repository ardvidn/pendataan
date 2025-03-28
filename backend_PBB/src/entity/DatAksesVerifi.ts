import { Column, Entity } from "typeorm";

@Entity("dat_akses_verifi", { schema: "public" })
export class DatAksesVerifi {
  @Column("character varying", { name: "akses_id", nullable: true, length: 10 })
  aksesId!: string | null;

  @Column("character varying", { name: "nm_akses", nullable: true, length: 80 })
  nmAkses!: string | null;

  @Column("character varying", {
    name: "url_akses",
    nullable: true,
    length: 255,
  })
  urlAkses!: string | null;
}
