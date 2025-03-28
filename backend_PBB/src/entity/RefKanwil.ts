import { Column, Entity, Index } from "typeorm";

@Index("ref_kanwil_pkey", ["kdKanwil"], { unique: true })
@Entity("ref_kanwil", { schema: "public" })
export class RefKanwil {
  @Column("character", { primary: true, name: "kd_kanwil", length: 2 })
  kdKanwil!: string;

  @Column("character varying", { name: "nm_kanwil", length: 30 })
  nmKanwil!: string;

  @Column("character varying", { name: "al_kanwil", length: 50 })
  alKanwil!: string;

  @Column("character varying", { name: "kota_terbit_kanwil", length: 30 })
  kotaTerbitKanwil!: string;

  @Column("character varying", {
    name: "no_faksimili",
    nullable: true,
    length: 50,
  })
  noFaksimili!: string | null;

  @Column("character varying", {
    name: "no_telpon",
    nullable: true,
    length: 50,
  })
  noTelpon!: string | null;
}
