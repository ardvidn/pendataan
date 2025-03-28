import { Column, Entity, Index } from "typeorm";

@Index("l6_2_ak", ["jnsSk", "kdKantor", "kdKanwil", "nipPencetakSk", "noSk"], {
  unique: true,
})
@Index("sk_sk_pkey", ["jnsSk", "kdKantor", "kdKanwil", "noSk"], {
  unique: true,
})
@Index("l6_1_ak", ["jnsSk", "kdKantor", "kdKanwil", "noSk"], { unique: true })
@Entity("sk_sk", { schema: "public" })
export class SkSk {
  @Column("character", { primary: true, name: "kd_kanwil", length: 2 })
  kdKanwil!: string;

  @Column("character", { primary: true, name: "kd_kantor", length: 2 })
  kdKantor!: string;

  @Column("character", { primary: true, name: "jns_sk", length: 1 })
  jnsSk!: string;

  @Column("character", { primary: true, name: "no_sk", length: 30 })
  noSk!: string;

  @Column("timestamp without time zone", { name: "tgl_sk" })
  tglSk!: Date;

  @Column("character varying", {
    name: "no_ba_kantor",
    nullable: true,
    length: 30,
  })
  noBaKantor!: string | null;

  @Column("timestamp without time zone", {
    name: "tgl_ba_kantor",
    nullable: true,
  })
  tglBaKantor!: Date | null;

  @Column("character varying", {
    name: "no_ba_lapangan",
    nullable: true,
    length: 30,
  })
  noBaLapangan!: string | null;

  @Column("timestamp without time zone", {
    name: "tgl_ba_lapangan",
    nullable: true,
  })
  tglBaLapangan!: Date | null;

  @Column("timestamp without time zone", {
    name: "tgl_cetak_sk",
    default: () => "statement_timestamp()",
  })
  tglCetakSk!: Date;

  @Column("character", { name: "nip_pencetak_sk", length: 18 })
  nipPencetakSk!: string;
}
