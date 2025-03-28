import { Column, Entity, Index } from "typeorm";

@Index("relation_2033_fk", ["kdKlu"], {})
@Index("npwp_pkey", ["mfcab", "mfkpp", "mfnpwp"], { unique: true })
@Index("peduduk_npwp_fk", ["noPenduduk"], {})
@Entity("npwp", { schema: "public" })
export class Npwp {
  @Column("character", { primary: true, name: "mfnpwp", length: 9 })
  mfnpwp!: string;

  @Column("character", { primary: true, name: "mfkpp", length: 3 })
  mfkpp!: string;

  @Column("character", { primary: true, name: "mfcab", length: 3 })
  mfcab!: string;

  @Column("character", { name: "kd_klu", nullable: true, length: 5 })
  kdKlu!: string | null;

  @Column("character", { name: "no_penduduk", nullable: true, length: 30 })
  noPenduduk!: string | null;
}
