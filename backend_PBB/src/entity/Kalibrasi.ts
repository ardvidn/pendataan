import { Column, Entity, Index } from "typeorm";

@Index("kalibrasi_pkey", ["indeksKalibrasi", "kdDati2", "kdKecamatan", "kdKelurahan", "kdPropinsi", "thnKalibrasi"], { unique: true })
@Index("e21_1_ak", ["indeksKalibrasi", "kdDati2", "kdKecamatan", "kdKelurahan", "kdPropinsi", "nipPengkalibrasi", "thnKalibrasi"], { unique: true })
@Entity("kalibrasi", { schema: "public" })
export class Kalibrasi {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "kd_kecamatan", length: 3 })
  kdKecamatan!: string;

  @Column("character", { primary: true, name: "kd_kelurahan", length: 3 })
  kdKelurahan!: string;

  @Column("character", { primary: true, name: "thn_kalibrasi", length: 4 })
  thnKalibrasi!: string;

  @Column("smallint", { primary: true, name: "indeks_kalibrasi" })
  indeksKalibrasi!: number;

  @Column("timestamp without time zone", {
    name: "tgl_kalibrasi",
    default: () => "statement_timestamp()",
  })
  tglKalibrasi!: Date;

  @Column("character", { name: "nip_pengkalibrasi", length: 18 })
  nipPengkalibrasi!: string;
}
