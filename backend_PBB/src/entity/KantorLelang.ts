import { Column, Entity, Index } from "typeorm";

@Index("kantor_lelang_pkey", ["kdKantorLelang"], { unique: true })
@Entity("kantor_lelang", { schema: "public" })
export class KantorLelang {
  @Column("character", { primary: true, name: "kd_kantor_lelang", length: 10 })
  kdKantorLelang!: string;

  @Column("character varying", { name: "nm_kantor_lelang", length: 20 })
  nmKantorLelang!: string;

  @Column("character varying", { name: "al_kantor_lelang", length: 30 })
  alKantorLelang!: string;
}
