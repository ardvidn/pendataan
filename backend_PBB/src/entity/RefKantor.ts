import { Column, Entity, Index } from "typeorm";

@Index("a6_1_ak", ["kdKantor", "kdKanwil", "nmKantor"], { unique: true })
@Index("ref_kantor_pkey", ["kdKantor", "kdKanwil"], { unique: true })
@Entity("ref_kantor", { schema: "public" })
export class RefKantor {
  @Column("character", { primary: true, name: "kd_kanwil", length: 2 })
  kdKanwil!: string;

  @Column("character", { primary: true, name: "kd_kantor", length: 2 })
  kdKantor!: string;

  @Column("character varying", { name: "nm_kantor", length: 30 })
  nmKantor!: string;

  @Column("character varying", { name: "al_kantor", length: 50 })
  alKantor!: string;

  @Column("character varying", { name: "kota_terbit", length: 30 })
  kotaTerbit!: string;

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
